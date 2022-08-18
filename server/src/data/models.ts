/**
 * A query repesentation of the provided {@link TEntity} 
 */
export type Query<TEntity> = {
    [P in keyof TEntity]?: TEntity[P];
} & {
    takeCount?: number;
    skipCount?: number;
}

abstract class EntityRepository<TEntity extends Record<string, unknown>> {
    public abstract get(query?: Query<TEntity>): Promise<TEntity[]>;

    protected itemMatchesQuery(entity: TEntity, query?: Query<TEntity>, allowNulls: boolean = false): Boolean {
        if (!query) {
            //No query to check, return true
            return true;
        }

        if (!entity) {
            //Return "true" if nulls are allowed; false otherwise
            return allowNulls;
        }

        const queryParts = query as TEntity;
        const queryKeys = Object.keys(queryParts);

        for(const queryKey of queryKeys) {
            if (entity[queryKey] !== query[queryKey]) {
                return false;
            }
        }

        return true;
    }
}

export class InMemoryRepository<TEntity extends Record<string, unknown>> extends EntityRepository<TEntity> {
    constructor(private _collection: TEntity[]) {
        super();
    }
    public async get(query?: Query<TEntity> | undefined): Promise<TEntity[]> {
        const result = await (async () => this._collection)();
        return result.filter(item => this.itemMatchesQuery(item, query))
    }
}