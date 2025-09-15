
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model AssetMetadata
 * 
 */
export type AssetMetadata = $Result.DefaultSelection<Prisma.$AssetMetadataPayload>
/**
 * Model TranscodingJob
 * 
 */
export type TranscodingJob = $Result.DefaultSelection<Prisma.$TranscodingJobPayload>
/**
 * Model AssetShare
 * 
 */
export type AssetShare = $Result.DefaultSelection<Prisma.$AssetSharePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssetStatus: {
  START: 'START',
  COMPLETED: 'COMPLETED'
};

export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus]


export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const InvitationStatus: {
  PENDING: 'PENDING',
  JOINED: 'JOINED'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]


export const InvitationRole: {
  USER: 'USER',
  MANAGER: 'MANAGER'
};

export type InvitationRole = (typeof InvitationRole)[keyof typeof InvitationRole]


export const JobStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type AssetStatus = $Enums.AssetStatus

export const AssetStatus: typeof $Enums.AssetStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

export type InvitationRole = $Enums.InvitationRole

export const InvitationRole: typeof $Enums.InvitationRole

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetMetadata`: Exposes CRUD operations for the **AssetMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetMetadata
    * const assetMetadata = await prisma.assetMetadata.findMany()
    * ```
    */
  get assetMetadata(): Prisma.AssetMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcodingJob`: Exposes CRUD operations for the **TranscodingJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranscodingJobs
    * const transcodingJobs = await prisma.transcodingJob.findMany()
    * ```
    */
  get transcodingJob(): Prisma.TranscodingJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetShare`: Exposes CRUD operations for the **AssetShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetShares
    * const assetShares = await prisma.assetShare.findMany()
    * ```
    */
  get assetShare(): Prisma.AssetShareDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Invitation: 'Invitation',
    Asset: 'Asset',
    AssetMetadata: 'AssetMetadata',
    TranscodingJob: 'TranscodingJob',
    AssetShare: 'AssetShare'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "invitation" | "asset" | "assetMetadata" | "transcodingJob" | "assetShare"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      AssetMetadata: {
        payload: Prisma.$AssetMetadataPayload<ExtArgs>
        fields: Prisma.AssetMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>
          }
          findFirst: {
            args: Prisma.AssetMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>
          }
          findMany: {
            args: Prisma.AssetMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>[]
          }
          create: {
            args: Prisma.AssetMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>
          }
          createMany: {
            args: Prisma.AssetMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>[]
          }
          delete: {
            args: Prisma.AssetMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>
          }
          update: {
            args: Prisma.AssetMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>
          }
          deleteMany: {
            args: Prisma.AssetMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>[]
          }
          upsert: {
            args: Prisma.AssetMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetMetadataPayload>
          }
          aggregate: {
            args: Prisma.AssetMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetMetadata>
          }
          groupBy: {
            args: Prisma.AssetMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<AssetMetadataCountAggregateOutputType> | number
          }
        }
      }
      TranscodingJob: {
        payload: Prisma.$TranscodingJobPayload<ExtArgs>
        fields: Prisma.TranscodingJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscodingJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscodingJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>
          }
          findFirst: {
            args: Prisma.TranscodingJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscodingJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>
          }
          findMany: {
            args: Prisma.TranscodingJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>[]
          }
          create: {
            args: Prisma.TranscodingJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>
          }
          createMany: {
            args: Prisma.TranscodingJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscodingJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>[]
          }
          delete: {
            args: Prisma.TranscodingJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>
          }
          update: {
            args: Prisma.TranscodingJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>
          }
          deleteMany: {
            args: Prisma.TranscodingJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscodingJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranscodingJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>[]
          }
          upsert: {
            args: Prisma.TranscodingJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscodingJobPayload>
          }
          aggregate: {
            args: Prisma.TranscodingJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscodingJob>
          }
          groupBy: {
            args: Prisma.TranscodingJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscodingJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscodingJobCountArgs<ExtArgs>
            result: $Utils.Optional<TranscodingJobCountAggregateOutputType> | number
          }
        }
      }
      AssetShare: {
        payload: Prisma.$AssetSharePayload<ExtArgs>
        fields: Prisma.AssetShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>
          }
          findFirst: {
            args: Prisma.AssetShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>
          }
          findMany: {
            args: Prisma.AssetShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>[]
          }
          create: {
            args: Prisma.AssetShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>
          }
          createMany: {
            args: Prisma.AssetShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>[]
          }
          delete: {
            args: Prisma.AssetShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>
          }
          update: {
            args: Prisma.AssetShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>
          }
          deleteMany: {
            args: Prisma.AssetShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>[]
          }
          upsert: {
            args: Prisma.AssetShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetSharePayload>
          }
          aggregate: {
            args: Prisma.AssetShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetShare>
          }
          groupBy: {
            args: Prisma.AssetShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetShareCountArgs<ExtArgs>
            result: $Utils.Optional<AssetShareCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    invitation?: InvitationOmit
    asset?: AssetOmit
    assetMetadata?: AssetMetadataOmit
    transcodingJob?: TranscodingJobOmit
    assetShare?: AssetShareOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentInvites: number
    assets: number
    sharedAssets: number
    restrictedShares: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentInvites?: boolean | UserCountOutputTypeCountSentInvitesArgs
    assets?: boolean | UserCountOutputTypeCountAssetsArgs
    sharedAssets?: boolean | UserCountOutputTypeCountSharedAssetsArgs
    restrictedShares?: boolean | UserCountOutputTypeCountRestrictedSharesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRestrictedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetShareWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    metadata: number
    transcodingJobs: number
    shares: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metadata?: boolean | AssetCountOutputTypeCountMetadataArgs
    transcodingJobs?: boolean | AssetCountOutputTypeCountTranscodingJobsArgs
    shares?: boolean | AssetCountOutputTypeCountSharesArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetMetadataWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountTranscodingJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscodingJobWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetShareWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentInvites?: boolean | User$sentInvitesArgs<ExtArgs>
    assets?: boolean | User$assetsArgs<ExtArgs>
    sharedAssets?: boolean | User$sharedAssetsArgs<ExtArgs>
    restrictedShares?: boolean | User$restrictedSharesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentInvites?: boolean | User$sentInvitesArgs<ExtArgs>
    assets?: boolean | User$assetsArgs<ExtArgs>
    sharedAssets?: boolean | User$sharedAssetsArgs<ExtArgs>
    restrictedShares?: boolean | User$restrictedSharesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentInvites: Prisma.$InvitationPayload<ExtArgs>[]
      assets: Prisma.$AssetPayload<ExtArgs>[]
      sharedAssets: Prisma.$AssetSharePayload<ExtArgs>[]
      restrictedShares: Prisma.$AssetSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      role: $Enums.Role
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentInvites<T extends User$sentInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assets<T extends User$assetsArgs<ExtArgs> = {}>(args?: Subset<T, User$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedAssets<T extends User$sharedAssetsArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restrictedShares<T extends User$restrictedSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$restrictedSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentInvites
   */
  export type User$sentInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * User.assets
   */
  export type User$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * User.sharedAssets
   */
  export type User$sharedAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    where?: AssetShareWhereInput
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    cursor?: AssetShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetShareScalarFieldEnum | AssetShareScalarFieldEnum[]
  }

  /**
   * User.restrictedShares
   */
  export type User$restrictedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    where?: AssetShareWhereInput
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    cursor?: AssetShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetShareScalarFieldEnum | AssetShareScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.InvitationRole | null
    status: $Enums.InvitationStatus | null
    inviteBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    acceptedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.InvitationRole | null
    status: $Enums.InvitationStatus | null
    inviteBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    acceptedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    role: number
    status: number
    inviteBy: number
    createdAt: number
    updatedAt: number
    acceptedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    status?: true
    inviteBy?: true
    createdAt?: true
    updatedAt?: true
    acceptedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    status?: true
    inviteBy?: true
    createdAt?: true
    updatedAt?: true
    acceptedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    status?: true
    inviteBy?: true
    createdAt?: true
    updatedAt?: true
    acceptedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    email: string
    role: $Enums.InvitationRole
    status: $Enums.InvitationStatus
    inviteBy: string
    createdAt: Date
    updatedAt: Date
    acceptedAt: Date | null
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    inviteBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acceptedAt?: boolean
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    inviteBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acceptedAt?: boolean
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    inviteBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acceptedAt?: boolean
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    inviteBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acceptedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "status" | "inviteBy" | "createdAt" | "updatedAt" | "acceptedAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      invitedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: $Enums.InvitationRole
      status: $Enums.InvitationStatus
      inviteBy: string
      createdAt: Date
      updatedAt: Date
      acceptedAt: Date | null
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly role: FieldRef<"Invitation", 'InvitationRole'>
    readonly status: FieldRef<"Invitation", 'InvitationStatus'>
    readonly inviteBy: FieldRef<"Invitation", 'String'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
    readonly acceptedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    size_bytes: number | null
  }

  export type AssetSumAggregateOutputType = {
    size_bytes: number | null
  }

  export type AssetMinAggregateOutputType = {
    asset_id: string | null
    filename: string | null
    mime_type: string | null
    storage_path: string | null
    uploader_id: string | null
    group_id: string | null
    size_bytes: number | null
    status: $Enums.AssetStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    asset_id: string | null
    filename: string | null
    mime_type: string | null
    storage_path: string | null
    uploader_id: string | null
    group_id: string | null
    size_bytes: number | null
    status: $Enums.AssetStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetCountAggregateOutputType = {
    asset_id: number
    filename: number
    mime_type: number
    storage_path: number
    uploader_id: number
    group_id: number
    size_bytes: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    size_bytes?: true
  }

  export type AssetSumAggregateInputType = {
    size_bytes?: true
  }

  export type AssetMinAggregateInputType = {
    asset_id?: true
    filename?: true
    mime_type?: true
    storage_path?: true
    uploader_id?: true
    group_id?: true
    size_bytes?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetMaxAggregateInputType = {
    asset_id?: true
    filename?: true
    mime_type?: true
    storage_path?: true
    uploader_id?: true
    group_id?: true
    size_bytes?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetCountAggregateInputType = {
    asset_id?: true
    filename?: true
    mime_type?: true
    storage_path?: true
    uploader_id?: true
    group_id?: true
    size_bytes?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    asset_id: string
    filename: string
    mime_type: string
    storage_path: string
    uploader_id: string
    group_id: string | null
    size_bytes: number
    status: $Enums.AssetStatus
    created_at: Date
    updated_at: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset_id?: boolean
    filename?: boolean
    mime_type?: boolean
    storage_path?: boolean
    uploader_id?: boolean
    group_id?: boolean
    size_bytes?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    metadata?: boolean | Asset$metadataArgs<ExtArgs>
    transcodingJobs?: boolean | Asset$transcodingJobsArgs<ExtArgs>
    shares?: boolean | Asset$sharesArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset_id?: boolean
    filename?: boolean
    mime_type?: boolean
    storage_path?: boolean
    uploader_id?: boolean
    group_id?: boolean
    size_bytes?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asset_id?: boolean
    filename?: boolean
    mime_type?: boolean
    storage_path?: boolean
    uploader_id?: boolean
    group_id?: boolean
    size_bytes?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    asset_id?: boolean
    filename?: boolean
    mime_type?: boolean
    storage_path?: boolean
    uploader_id?: boolean
    group_id?: boolean
    size_bytes?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"asset_id" | "filename" | "mime_type" | "storage_path" | "uploader_id" | "group_id" | "size_bytes" | "status" | "created_at" | "updated_at", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
    metadata?: boolean | Asset$metadataArgs<ExtArgs>
    transcodingJobs?: boolean | Asset$transcodingJobsArgs<ExtArgs>
    shares?: boolean | Asset$sharesArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      uploader: Prisma.$UserPayload<ExtArgs>
      metadata: Prisma.$AssetMetadataPayload<ExtArgs>[]
      transcodingJobs: Prisma.$TranscodingJobPayload<ExtArgs>[]
      shares: Prisma.$AssetSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      asset_id: string
      filename: string
      mime_type: string
      storage_path: string
      uploader_id: string
      group_id: string | null
      size_bytes: number
      status: $Enums.AssetStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `asset_id`
     * const assetWithAsset_idOnly = await prisma.asset.findMany({ select: { asset_id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `asset_id`
     * const assetWithAsset_idOnly = await prisma.asset.createManyAndReturn({
     *   select: { asset_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `asset_id`
     * const assetWithAsset_idOnly = await prisma.asset.updateManyAndReturn({
     *   select: { asset_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metadata<T extends Asset$metadataArgs<ExtArgs> = {}>(args?: Subset<T, Asset$metadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transcodingJobs<T extends Asset$transcodingJobsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$transcodingJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Asset$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Asset$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly asset_id: FieldRef<"Asset", 'String'>
    readonly filename: FieldRef<"Asset", 'String'>
    readonly mime_type: FieldRef<"Asset", 'String'>
    readonly storage_path: FieldRef<"Asset", 'String'>
    readonly uploader_id: FieldRef<"Asset", 'String'>
    readonly group_id: FieldRef<"Asset", 'String'>
    readonly size_bytes: FieldRef<"Asset", 'Int'>
    readonly status: FieldRef<"Asset", 'AssetStatus'>
    readonly created_at: FieldRef<"Asset", 'DateTime'>
    readonly updated_at: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.metadata
   */
  export type Asset$metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    where?: AssetMetadataWhereInput
    orderBy?: AssetMetadataOrderByWithRelationInput | AssetMetadataOrderByWithRelationInput[]
    cursor?: AssetMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetMetadataScalarFieldEnum | AssetMetadataScalarFieldEnum[]
  }

  /**
   * Asset.transcodingJobs
   */
  export type Asset$transcodingJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    where?: TranscodingJobWhereInput
    orderBy?: TranscodingJobOrderByWithRelationInput | TranscodingJobOrderByWithRelationInput[]
    cursor?: TranscodingJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranscodingJobScalarFieldEnum | TranscodingJobScalarFieldEnum[]
  }

  /**
   * Asset.shares
   */
  export type Asset$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    where?: AssetShareWhereInput
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    cursor?: AssetShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetShareScalarFieldEnum | AssetShareScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model AssetMetadata
   */

  export type AggregateAssetMetadata = {
    _count: AssetMetadataCountAggregateOutputType | null
    _min: AssetMetadataMinAggregateOutputType | null
    _max: AssetMetadataMaxAggregateOutputType | null
  }

  export type AssetMetadataMinAggregateOutputType = {
    metadata_id: string | null
    asset_id: string | null
    key: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetMetadataMaxAggregateOutputType = {
    metadata_id: string | null
    asset_id: string | null
    key: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetMetadataCountAggregateOutputType = {
    metadata_id: number
    asset_id: number
    key: number
    value: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AssetMetadataMinAggregateInputType = {
    metadata_id?: true
    asset_id?: true
    key?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetMetadataMaxAggregateInputType = {
    metadata_id?: true
    asset_id?: true
    key?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetMetadataCountAggregateInputType = {
    metadata_id?: true
    asset_id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AssetMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetMetadata to aggregate.
     */
    where?: AssetMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetMetadata to fetch.
     */
    orderBy?: AssetMetadataOrderByWithRelationInput | AssetMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetMetadata
    **/
    _count?: true | AssetMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMetadataMaxAggregateInputType
  }

  export type GetAssetMetadataAggregateType<T extends AssetMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetMetadata[P]>
      : GetScalarType<T[P], AggregateAssetMetadata[P]>
  }




  export type AssetMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetMetadataWhereInput
    orderBy?: AssetMetadataOrderByWithAggregationInput | AssetMetadataOrderByWithAggregationInput[]
    by: AssetMetadataScalarFieldEnum[] | AssetMetadataScalarFieldEnum
    having?: AssetMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetMetadataCountAggregateInputType | true
    _min?: AssetMetadataMinAggregateInputType
    _max?: AssetMetadataMaxAggregateInputType
  }

  export type AssetMetadataGroupByOutputType = {
    metadata_id: string
    asset_id: string
    key: string
    value: JsonValue
    created_at: Date
    updated_at: Date
    _count: AssetMetadataCountAggregateOutputType | null
    _min: AssetMetadataMinAggregateOutputType | null
    _max: AssetMetadataMaxAggregateOutputType | null
  }

  type GetAssetMetadataGroupByPayload<T extends AssetMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], AssetMetadataGroupByOutputType[P]>
        }
      >
    >


  export type AssetMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metadata_id?: boolean
    asset_id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetMetadata"]>

  export type AssetMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metadata_id?: boolean
    asset_id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetMetadata"]>

  export type AssetMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metadata_id?: boolean
    asset_id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetMetadata"]>

  export type AssetMetadataSelectScalar = {
    metadata_id?: boolean
    asset_id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AssetMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"metadata_id" | "asset_id" | "key" | "value" | "created_at" | "updated_at", ExtArgs["result"]["assetMetadata"]>
  export type AssetMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type AssetMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type AssetMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $AssetMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetMetadata"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      metadata_id: string
      asset_id: string
      key: string
      value: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["assetMetadata"]>
    composites: {}
  }

  type AssetMetadataGetPayload<S extends boolean | null | undefined | AssetMetadataDefaultArgs> = $Result.GetResult<Prisma.$AssetMetadataPayload, S>

  type AssetMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetMetadataCountAggregateInputType | true
    }

  export interface AssetMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetMetadata'], meta: { name: 'AssetMetadata' } }
    /**
     * Find zero or one AssetMetadata that matches the filter.
     * @param {AssetMetadataFindUniqueArgs} args - Arguments to find a AssetMetadata
     * @example
     * // Get one AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetMetadataFindUniqueArgs>(args: SelectSubset<T, AssetMetadataFindUniqueArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetMetadataFindUniqueOrThrowArgs} args - Arguments to find a AssetMetadata
     * @example
     * // Get one AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataFindFirstArgs} args - Arguments to find a AssetMetadata
     * @example
     * // Get one AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetMetadataFindFirstArgs>(args?: SelectSubset<T, AssetMetadataFindFirstArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataFindFirstOrThrowArgs} args - Arguments to find a AssetMetadata
     * @example
     * // Get one AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.findMany()
     * 
     * // Get first 10 AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.findMany({ take: 10 })
     * 
     * // Only select the `metadata_id`
     * const assetMetadataWithMetadata_idOnly = await prisma.assetMetadata.findMany({ select: { metadata_id: true } })
     * 
     */
    findMany<T extends AssetMetadataFindManyArgs>(args?: SelectSubset<T, AssetMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetMetadata.
     * @param {AssetMetadataCreateArgs} args - Arguments to create a AssetMetadata.
     * @example
     * // Create one AssetMetadata
     * const AssetMetadata = await prisma.assetMetadata.create({
     *   data: {
     *     // ... data to create a AssetMetadata
     *   }
     * })
     * 
     */
    create<T extends AssetMetadataCreateArgs>(args: SelectSubset<T, AssetMetadataCreateArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetMetadata.
     * @param {AssetMetadataCreateManyArgs} args - Arguments to create many AssetMetadata.
     * @example
     * // Create many AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetMetadataCreateManyArgs>(args?: SelectSubset<T, AssetMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetMetadata and returns the data saved in the database.
     * @param {AssetMetadataCreateManyAndReturnArgs} args - Arguments to create many AssetMetadata.
     * @example
     * // Create many AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetMetadata and only return the `metadata_id`
     * const assetMetadataWithMetadata_idOnly = await prisma.assetMetadata.createManyAndReturn({
     *   select: { metadata_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssetMetadata.
     * @param {AssetMetadataDeleteArgs} args - Arguments to delete one AssetMetadata.
     * @example
     * // Delete one AssetMetadata
     * const AssetMetadata = await prisma.assetMetadata.delete({
     *   where: {
     *     // ... filter to delete one AssetMetadata
     *   }
     * })
     * 
     */
    delete<T extends AssetMetadataDeleteArgs>(args: SelectSubset<T, AssetMetadataDeleteArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetMetadata.
     * @param {AssetMetadataUpdateArgs} args - Arguments to update one AssetMetadata.
     * @example
     * // Update one AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetMetadataUpdateArgs>(args: SelectSubset<T, AssetMetadataUpdateArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetMetadata.
     * @param {AssetMetadataDeleteManyArgs} args - Arguments to filter AssetMetadata to delete.
     * @example
     * // Delete a few AssetMetadata
     * const { count } = await prisma.assetMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetMetadataDeleteManyArgs>(args?: SelectSubset<T, AssetMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetMetadataUpdateManyArgs>(args: SelectSubset<T, AssetMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetMetadata and returns the data updated in the database.
     * @param {AssetMetadataUpdateManyAndReturnArgs} args - Arguments to update many AssetMetadata.
     * @example
     * // Update many AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetMetadata and only return the `metadata_id`
     * const assetMetadataWithMetadata_idOnly = await prisma.assetMetadata.updateManyAndReturn({
     *   select: { metadata_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssetMetadata.
     * @param {AssetMetadataUpsertArgs} args - Arguments to update or create a AssetMetadata.
     * @example
     * // Update or create a AssetMetadata
     * const assetMetadata = await prisma.assetMetadata.upsert({
     *   create: {
     *     // ... data to create a AssetMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetMetadata we want to update
     *   }
     * })
     */
    upsert<T extends AssetMetadataUpsertArgs>(args: SelectSubset<T, AssetMetadataUpsertArgs<ExtArgs>>): Prisma__AssetMetadataClient<$Result.GetResult<Prisma.$AssetMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataCountArgs} args - Arguments to filter AssetMetadata to count.
     * @example
     * // Count the number of AssetMetadata
     * const count = await prisma.assetMetadata.count({
     *   where: {
     *     // ... the filter for the AssetMetadata we want to count
     *   }
     * })
    **/
    count<T extends AssetMetadataCountArgs>(
      args?: Subset<T, AssetMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetMetadataAggregateArgs>(args: Subset<T, AssetMetadataAggregateArgs>): Prisma.PrismaPromise<GetAssetMetadataAggregateType<T>>

    /**
     * Group by AssetMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetMetadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetMetadataGroupByArgs['orderBy'] }
        : { orderBy?: AssetMetadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetMetadata model
   */
  readonly fields: AssetMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetMetadata model
   */
  interface AssetMetadataFieldRefs {
    readonly metadata_id: FieldRef<"AssetMetadata", 'String'>
    readonly asset_id: FieldRef<"AssetMetadata", 'String'>
    readonly key: FieldRef<"AssetMetadata", 'String'>
    readonly value: FieldRef<"AssetMetadata", 'Json'>
    readonly created_at: FieldRef<"AssetMetadata", 'DateTime'>
    readonly updated_at: FieldRef<"AssetMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssetMetadata findUnique
   */
  export type AssetMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AssetMetadata to fetch.
     */
    where: AssetMetadataWhereUniqueInput
  }

  /**
   * AssetMetadata findUniqueOrThrow
   */
  export type AssetMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AssetMetadata to fetch.
     */
    where: AssetMetadataWhereUniqueInput
  }

  /**
   * AssetMetadata findFirst
   */
  export type AssetMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AssetMetadata to fetch.
     */
    where?: AssetMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetMetadata to fetch.
     */
    orderBy?: AssetMetadataOrderByWithRelationInput | AssetMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetMetadata.
     */
    cursor?: AssetMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetMetadata.
     */
    distinct?: AssetMetadataScalarFieldEnum | AssetMetadataScalarFieldEnum[]
  }

  /**
   * AssetMetadata findFirstOrThrow
   */
  export type AssetMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AssetMetadata to fetch.
     */
    where?: AssetMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetMetadata to fetch.
     */
    orderBy?: AssetMetadataOrderByWithRelationInput | AssetMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetMetadata.
     */
    cursor?: AssetMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetMetadata.
     */
    distinct?: AssetMetadataScalarFieldEnum | AssetMetadataScalarFieldEnum[]
  }

  /**
   * AssetMetadata findMany
   */
  export type AssetMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AssetMetadata to fetch.
     */
    where?: AssetMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetMetadata to fetch.
     */
    orderBy?: AssetMetadataOrderByWithRelationInput | AssetMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetMetadata.
     */
    cursor?: AssetMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetMetadata.
     */
    skip?: number
    distinct?: AssetMetadataScalarFieldEnum | AssetMetadataScalarFieldEnum[]
  }

  /**
   * AssetMetadata create
   */
  export type AssetMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetMetadata.
     */
    data: XOR<AssetMetadataCreateInput, AssetMetadataUncheckedCreateInput>
  }

  /**
   * AssetMetadata createMany
   */
  export type AssetMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetMetadata.
     */
    data: AssetMetadataCreateManyInput | AssetMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetMetadata createManyAndReturn
   */
  export type AssetMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many AssetMetadata.
     */
    data: AssetMetadataCreateManyInput | AssetMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetMetadata update
   */
  export type AssetMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetMetadata.
     */
    data: XOR<AssetMetadataUpdateInput, AssetMetadataUncheckedUpdateInput>
    /**
     * Choose, which AssetMetadata to update.
     */
    where: AssetMetadataWhereUniqueInput
  }

  /**
   * AssetMetadata updateMany
   */
  export type AssetMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetMetadata.
     */
    data: XOR<AssetMetadataUpdateManyMutationInput, AssetMetadataUncheckedUpdateManyInput>
    /**
     * Filter which AssetMetadata to update
     */
    where?: AssetMetadataWhereInput
    /**
     * Limit how many AssetMetadata to update.
     */
    limit?: number
  }

  /**
   * AssetMetadata updateManyAndReturn
   */
  export type AssetMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * The data used to update AssetMetadata.
     */
    data: XOR<AssetMetadataUpdateManyMutationInput, AssetMetadataUncheckedUpdateManyInput>
    /**
     * Filter which AssetMetadata to update
     */
    where?: AssetMetadataWhereInput
    /**
     * Limit how many AssetMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetMetadata upsert
   */
  export type AssetMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetMetadata to update in case it exists.
     */
    where: AssetMetadataWhereUniqueInput
    /**
     * In case the AssetMetadata found by the `where` argument doesn't exist, create a new AssetMetadata with this data.
     */
    create: XOR<AssetMetadataCreateInput, AssetMetadataUncheckedCreateInput>
    /**
     * In case the AssetMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetMetadataUpdateInput, AssetMetadataUncheckedUpdateInput>
  }

  /**
   * AssetMetadata delete
   */
  export type AssetMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
    /**
     * Filter which AssetMetadata to delete.
     */
    where: AssetMetadataWhereUniqueInput
  }

  /**
   * AssetMetadata deleteMany
   */
  export type AssetMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetMetadata to delete
     */
    where?: AssetMetadataWhereInput
    /**
     * Limit how many AssetMetadata to delete.
     */
    limit?: number
  }

  /**
   * AssetMetadata without action
   */
  export type AssetMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetMetadata
     */
    select?: AssetMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetMetadata
     */
    omit?: AssetMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetMetadataInclude<ExtArgs> | null
  }


  /**
   * Model TranscodingJob
   */

  export type AggregateTranscodingJob = {
    _count: TranscodingJobCountAggregateOutputType | null
    _min: TranscodingJobMinAggregateOutputType | null
    _max: TranscodingJobMaxAggregateOutputType | null
  }

  export type TranscodingJobMinAggregateOutputType = {
    id: string | null
    asset_id: string | null
    job_id: string | null
    worker_name: string | null
    event_name: string | null
    status: $Enums.JobStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TranscodingJobMaxAggregateOutputType = {
    id: string | null
    asset_id: string | null
    job_id: string | null
    worker_name: string | null
    event_name: string | null
    status: $Enums.JobStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TranscodingJobCountAggregateOutputType = {
    id: number
    asset_id: number
    job_id: number
    worker_name: number
    event_name: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TranscodingJobMinAggregateInputType = {
    id?: true
    asset_id?: true
    job_id?: true
    worker_name?: true
    event_name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TranscodingJobMaxAggregateInputType = {
    id?: true
    asset_id?: true
    job_id?: true
    worker_name?: true
    event_name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TranscodingJobCountAggregateInputType = {
    id?: true
    asset_id?: true
    job_id?: true
    worker_name?: true
    event_name?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TranscodingJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscodingJob to aggregate.
     */
    where?: TranscodingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscodingJobs to fetch.
     */
    orderBy?: TranscodingJobOrderByWithRelationInput | TranscodingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscodingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscodingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscodingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranscodingJobs
    **/
    _count?: true | TranscodingJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscodingJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscodingJobMaxAggregateInputType
  }

  export type GetTranscodingJobAggregateType<T extends TranscodingJobAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscodingJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscodingJob[P]>
      : GetScalarType<T[P], AggregateTranscodingJob[P]>
  }




  export type TranscodingJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscodingJobWhereInput
    orderBy?: TranscodingJobOrderByWithAggregationInput | TranscodingJobOrderByWithAggregationInput[]
    by: TranscodingJobScalarFieldEnum[] | TranscodingJobScalarFieldEnum
    having?: TranscodingJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscodingJobCountAggregateInputType | true
    _min?: TranscodingJobMinAggregateInputType
    _max?: TranscodingJobMaxAggregateInputType
  }

  export type TranscodingJobGroupByOutputType = {
    id: string
    asset_id: string
    job_id: string
    worker_name: string
    event_name: string
    status: $Enums.JobStatus
    created_at: Date
    updated_at: Date
    _count: TranscodingJobCountAggregateOutputType | null
    _min: TranscodingJobMinAggregateOutputType | null
    _max: TranscodingJobMaxAggregateOutputType | null
  }

  type GetTranscodingJobGroupByPayload<T extends TranscodingJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscodingJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscodingJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscodingJobGroupByOutputType[P]>
            : GetScalarType<T[P], TranscodingJobGroupByOutputType[P]>
        }
      >
    >


  export type TranscodingJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    job_id?: boolean
    worker_name?: boolean
    event_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcodingJob"]>

  export type TranscodingJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    job_id?: boolean
    worker_name?: boolean
    event_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcodingJob"]>

  export type TranscodingJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    job_id?: boolean
    worker_name?: boolean
    event_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcodingJob"]>

  export type TranscodingJobSelectScalar = {
    id?: boolean
    asset_id?: boolean
    job_id?: boolean
    worker_name?: boolean
    event_name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TranscodingJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "job_id" | "worker_name" | "event_name" | "status" | "created_at" | "updated_at", ExtArgs["result"]["transcodingJob"]>
  export type TranscodingJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type TranscodingJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type TranscodingJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $TranscodingJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranscodingJob"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asset_id: string
      job_id: string
      worker_name: string
      event_name: string
      status: $Enums.JobStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["transcodingJob"]>
    composites: {}
  }

  type TranscodingJobGetPayload<S extends boolean | null | undefined | TranscodingJobDefaultArgs> = $Result.GetResult<Prisma.$TranscodingJobPayload, S>

  type TranscodingJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranscodingJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscodingJobCountAggregateInputType | true
    }

  export interface TranscodingJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranscodingJob'], meta: { name: 'TranscodingJob' } }
    /**
     * Find zero or one TranscodingJob that matches the filter.
     * @param {TranscodingJobFindUniqueArgs} args - Arguments to find a TranscodingJob
     * @example
     * // Get one TranscodingJob
     * const transcodingJob = await prisma.transcodingJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscodingJobFindUniqueArgs>(args: SelectSubset<T, TranscodingJobFindUniqueArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranscodingJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranscodingJobFindUniqueOrThrowArgs} args - Arguments to find a TranscodingJob
     * @example
     * // Get one TranscodingJob
     * const transcodingJob = await prisma.transcodingJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscodingJobFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscodingJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscodingJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobFindFirstArgs} args - Arguments to find a TranscodingJob
     * @example
     * // Get one TranscodingJob
     * const transcodingJob = await prisma.transcodingJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscodingJobFindFirstArgs>(args?: SelectSubset<T, TranscodingJobFindFirstArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscodingJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobFindFirstOrThrowArgs} args - Arguments to find a TranscodingJob
     * @example
     * // Get one TranscodingJob
     * const transcodingJob = await prisma.transcodingJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscodingJobFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscodingJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranscodingJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranscodingJobs
     * const transcodingJobs = await prisma.transcodingJob.findMany()
     * 
     * // Get first 10 TranscodingJobs
     * const transcodingJobs = await prisma.transcodingJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcodingJobWithIdOnly = await prisma.transcodingJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscodingJobFindManyArgs>(args?: SelectSubset<T, TranscodingJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranscodingJob.
     * @param {TranscodingJobCreateArgs} args - Arguments to create a TranscodingJob.
     * @example
     * // Create one TranscodingJob
     * const TranscodingJob = await prisma.transcodingJob.create({
     *   data: {
     *     // ... data to create a TranscodingJob
     *   }
     * })
     * 
     */
    create<T extends TranscodingJobCreateArgs>(args: SelectSubset<T, TranscodingJobCreateArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranscodingJobs.
     * @param {TranscodingJobCreateManyArgs} args - Arguments to create many TranscodingJobs.
     * @example
     * // Create many TranscodingJobs
     * const transcodingJob = await prisma.transcodingJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscodingJobCreateManyArgs>(args?: SelectSubset<T, TranscodingJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranscodingJobs and returns the data saved in the database.
     * @param {TranscodingJobCreateManyAndReturnArgs} args - Arguments to create many TranscodingJobs.
     * @example
     * // Create many TranscodingJobs
     * const transcodingJob = await prisma.transcodingJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranscodingJobs and only return the `id`
     * const transcodingJobWithIdOnly = await prisma.transcodingJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscodingJobCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscodingJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranscodingJob.
     * @param {TranscodingJobDeleteArgs} args - Arguments to delete one TranscodingJob.
     * @example
     * // Delete one TranscodingJob
     * const TranscodingJob = await prisma.transcodingJob.delete({
     *   where: {
     *     // ... filter to delete one TranscodingJob
     *   }
     * })
     * 
     */
    delete<T extends TranscodingJobDeleteArgs>(args: SelectSubset<T, TranscodingJobDeleteArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranscodingJob.
     * @param {TranscodingJobUpdateArgs} args - Arguments to update one TranscodingJob.
     * @example
     * // Update one TranscodingJob
     * const transcodingJob = await prisma.transcodingJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscodingJobUpdateArgs>(args: SelectSubset<T, TranscodingJobUpdateArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranscodingJobs.
     * @param {TranscodingJobDeleteManyArgs} args - Arguments to filter TranscodingJobs to delete.
     * @example
     * // Delete a few TranscodingJobs
     * const { count } = await prisma.transcodingJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscodingJobDeleteManyArgs>(args?: SelectSubset<T, TranscodingJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscodingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranscodingJobs
     * const transcodingJob = await prisma.transcodingJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscodingJobUpdateManyArgs>(args: SelectSubset<T, TranscodingJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscodingJobs and returns the data updated in the database.
     * @param {TranscodingJobUpdateManyAndReturnArgs} args - Arguments to update many TranscodingJobs.
     * @example
     * // Update many TranscodingJobs
     * const transcodingJob = await prisma.transcodingJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranscodingJobs and only return the `id`
     * const transcodingJobWithIdOnly = await prisma.transcodingJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranscodingJobUpdateManyAndReturnArgs>(args: SelectSubset<T, TranscodingJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranscodingJob.
     * @param {TranscodingJobUpsertArgs} args - Arguments to update or create a TranscodingJob.
     * @example
     * // Update or create a TranscodingJob
     * const transcodingJob = await prisma.transcodingJob.upsert({
     *   create: {
     *     // ... data to create a TranscodingJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranscodingJob we want to update
     *   }
     * })
     */
    upsert<T extends TranscodingJobUpsertArgs>(args: SelectSubset<T, TranscodingJobUpsertArgs<ExtArgs>>): Prisma__TranscodingJobClient<$Result.GetResult<Prisma.$TranscodingJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranscodingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobCountArgs} args - Arguments to filter TranscodingJobs to count.
     * @example
     * // Count the number of TranscodingJobs
     * const count = await prisma.transcodingJob.count({
     *   where: {
     *     // ... the filter for the TranscodingJobs we want to count
     *   }
     * })
    **/
    count<T extends TranscodingJobCountArgs>(
      args?: Subset<T, TranscodingJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscodingJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranscodingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TranscodingJobAggregateArgs>(args: Subset<T, TranscodingJobAggregateArgs>): Prisma.PrismaPromise<GetTranscodingJobAggregateType<T>>

    /**
     * Group by TranscodingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscodingJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TranscodingJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscodingJobGroupByArgs['orderBy'] }
        : { orderBy?: TranscodingJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TranscodingJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscodingJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranscodingJob model
   */
  readonly fields: TranscodingJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranscodingJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscodingJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TranscodingJob model
   */
  interface TranscodingJobFieldRefs {
    readonly id: FieldRef<"TranscodingJob", 'String'>
    readonly asset_id: FieldRef<"TranscodingJob", 'String'>
    readonly job_id: FieldRef<"TranscodingJob", 'String'>
    readonly worker_name: FieldRef<"TranscodingJob", 'String'>
    readonly event_name: FieldRef<"TranscodingJob", 'String'>
    readonly status: FieldRef<"TranscodingJob", 'JobStatus'>
    readonly created_at: FieldRef<"TranscodingJob", 'DateTime'>
    readonly updated_at: FieldRef<"TranscodingJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TranscodingJob findUnique
   */
  export type TranscodingJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscodingJob to fetch.
     */
    where: TranscodingJobWhereUniqueInput
  }

  /**
   * TranscodingJob findUniqueOrThrow
   */
  export type TranscodingJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscodingJob to fetch.
     */
    where: TranscodingJobWhereUniqueInput
  }

  /**
   * TranscodingJob findFirst
   */
  export type TranscodingJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscodingJob to fetch.
     */
    where?: TranscodingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscodingJobs to fetch.
     */
    orderBy?: TranscodingJobOrderByWithRelationInput | TranscodingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscodingJobs.
     */
    cursor?: TranscodingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscodingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscodingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscodingJobs.
     */
    distinct?: TranscodingJobScalarFieldEnum | TranscodingJobScalarFieldEnum[]
  }

  /**
   * TranscodingJob findFirstOrThrow
   */
  export type TranscodingJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscodingJob to fetch.
     */
    where?: TranscodingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscodingJobs to fetch.
     */
    orderBy?: TranscodingJobOrderByWithRelationInput | TranscodingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscodingJobs.
     */
    cursor?: TranscodingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscodingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscodingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscodingJobs.
     */
    distinct?: TranscodingJobScalarFieldEnum | TranscodingJobScalarFieldEnum[]
  }

  /**
   * TranscodingJob findMany
   */
  export type TranscodingJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscodingJobs to fetch.
     */
    where?: TranscodingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscodingJobs to fetch.
     */
    orderBy?: TranscodingJobOrderByWithRelationInput | TranscodingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranscodingJobs.
     */
    cursor?: TranscodingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscodingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscodingJobs.
     */
    skip?: number
    distinct?: TranscodingJobScalarFieldEnum | TranscodingJobScalarFieldEnum[]
  }

  /**
   * TranscodingJob create
   */
  export type TranscodingJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * The data needed to create a TranscodingJob.
     */
    data: XOR<TranscodingJobCreateInput, TranscodingJobUncheckedCreateInput>
  }

  /**
   * TranscodingJob createMany
   */
  export type TranscodingJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranscodingJobs.
     */
    data: TranscodingJobCreateManyInput | TranscodingJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranscodingJob createManyAndReturn
   */
  export type TranscodingJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * The data used to create many TranscodingJobs.
     */
    data: TranscodingJobCreateManyInput | TranscodingJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranscodingJob update
   */
  export type TranscodingJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * The data needed to update a TranscodingJob.
     */
    data: XOR<TranscodingJobUpdateInput, TranscodingJobUncheckedUpdateInput>
    /**
     * Choose, which TranscodingJob to update.
     */
    where: TranscodingJobWhereUniqueInput
  }

  /**
   * TranscodingJob updateMany
   */
  export type TranscodingJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranscodingJobs.
     */
    data: XOR<TranscodingJobUpdateManyMutationInput, TranscodingJobUncheckedUpdateManyInput>
    /**
     * Filter which TranscodingJobs to update
     */
    where?: TranscodingJobWhereInput
    /**
     * Limit how many TranscodingJobs to update.
     */
    limit?: number
  }

  /**
   * TranscodingJob updateManyAndReturn
   */
  export type TranscodingJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * The data used to update TranscodingJobs.
     */
    data: XOR<TranscodingJobUpdateManyMutationInput, TranscodingJobUncheckedUpdateManyInput>
    /**
     * Filter which TranscodingJobs to update
     */
    where?: TranscodingJobWhereInput
    /**
     * Limit how many TranscodingJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranscodingJob upsert
   */
  export type TranscodingJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * The filter to search for the TranscodingJob to update in case it exists.
     */
    where: TranscodingJobWhereUniqueInput
    /**
     * In case the TranscodingJob found by the `where` argument doesn't exist, create a new TranscodingJob with this data.
     */
    create: XOR<TranscodingJobCreateInput, TranscodingJobUncheckedCreateInput>
    /**
     * In case the TranscodingJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscodingJobUpdateInput, TranscodingJobUncheckedUpdateInput>
  }

  /**
   * TranscodingJob delete
   */
  export type TranscodingJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
    /**
     * Filter which TranscodingJob to delete.
     */
    where: TranscodingJobWhereUniqueInput
  }

  /**
   * TranscodingJob deleteMany
   */
  export type TranscodingJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscodingJobs to delete
     */
    where?: TranscodingJobWhereInput
    /**
     * Limit how many TranscodingJobs to delete.
     */
    limit?: number
  }

  /**
   * TranscodingJob without action
   */
  export type TranscodingJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscodingJob
     */
    select?: TranscodingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscodingJob
     */
    omit?: TranscodingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscodingJobInclude<ExtArgs> | null
  }


  /**
   * Model AssetShare
   */

  export type AggregateAssetShare = {
    _count: AssetShareCountAggregateOutputType | null
    _min: AssetShareMinAggregateOutputType | null
    _max: AssetShareMaxAggregateOutputType | null
  }

  export type AssetShareMinAggregateOutputType = {
    id: string | null
    asset_id: string | null
    shared_by: string | null
    share_type: string | null
    share_token: string | null
    user_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetShareMaxAggregateOutputType = {
    id: string | null
    asset_id: string | null
    shared_by: string | null
    share_type: string | null
    share_token: string | null
    user_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssetShareCountAggregateOutputType = {
    id: number
    asset_id: number
    shared_by: number
    share_type: number
    share_token: number
    user_id: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AssetShareMinAggregateInputType = {
    id?: true
    asset_id?: true
    shared_by?: true
    share_type?: true
    share_token?: true
    user_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetShareMaxAggregateInputType = {
    id?: true
    asset_id?: true
    shared_by?: true
    share_type?: true
    share_token?: true
    user_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type AssetShareCountAggregateInputType = {
    id?: true
    asset_id?: true
    shared_by?: true
    share_type?: true
    share_token?: true
    user_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AssetShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetShare to aggregate.
     */
    where?: AssetShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetShares to fetch.
     */
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetShares
    **/
    _count?: true | AssetShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetShareMaxAggregateInputType
  }

  export type GetAssetShareAggregateType<T extends AssetShareAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetShare[P]>
      : GetScalarType<T[P], AggregateAssetShare[P]>
  }




  export type AssetShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetShareWhereInput
    orderBy?: AssetShareOrderByWithAggregationInput | AssetShareOrderByWithAggregationInput[]
    by: AssetShareScalarFieldEnum[] | AssetShareScalarFieldEnum
    having?: AssetShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetShareCountAggregateInputType | true
    _min?: AssetShareMinAggregateInputType
    _max?: AssetShareMaxAggregateInputType
  }

  export type AssetShareGroupByOutputType = {
    id: string
    asset_id: string
    shared_by: string
    share_type: string
    share_token: string
    user_id: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: AssetShareCountAggregateOutputType | null
    _min: AssetShareMinAggregateOutputType | null
    _max: AssetShareMaxAggregateOutputType | null
  }

  type GetAssetShareGroupByPayload<T extends AssetShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetShareGroupByOutputType[P]>
            : GetScalarType<T[P], AssetShareGroupByOutputType[P]>
        }
      >
    >


  export type AssetShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    shared_by?: boolean
    share_type?: boolean
    share_token?: boolean
    user_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | AssetShare$userArgs<ExtArgs>
  }, ExtArgs["result"]["assetShare"]>

  export type AssetShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    shared_by?: boolean
    share_type?: boolean
    share_token?: boolean
    user_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | AssetShare$userArgs<ExtArgs>
  }, ExtArgs["result"]["assetShare"]>

  export type AssetShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    shared_by?: boolean
    share_type?: boolean
    share_token?: boolean
    user_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | AssetShare$userArgs<ExtArgs>
  }, ExtArgs["result"]["assetShare"]>

  export type AssetShareSelectScalar = {
    id?: boolean
    asset_id?: boolean
    shared_by?: boolean
    share_type?: boolean
    share_token?: boolean
    user_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AssetShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "shared_by" | "share_type" | "share_token" | "user_id" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["assetShare"]>
  export type AssetShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | AssetShare$userArgs<ExtArgs>
  }
  export type AssetShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | AssetShare$userArgs<ExtArgs>
  }
  export type AssetShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    sharedBy?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | AssetShare$userArgs<ExtArgs>
  }

  export type $AssetSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetShare"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      sharedBy: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asset_id: string
      shared_by: string
      share_type: string
      share_token: string
      user_id: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["assetShare"]>
    composites: {}
  }

  type AssetShareGetPayload<S extends boolean | null | undefined | AssetShareDefaultArgs> = $Result.GetResult<Prisma.$AssetSharePayload, S>

  type AssetShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetShareCountAggregateInputType | true
    }

  export interface AssetShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetShare'], meta: { name: 'AssetShare' } }
    /**
     * Find zero or one AssetShare that matches the filter.
     * @param {AssetShareFindUniqueArgs} args - Arguments to find a AssetShare
     * @example
     * // Get one AssetShare
     * const assetShare = await prisma.assetShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetShareFindUniqueArgs>(args: SelectSubset<T, AssetShareFindUniqueArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetShareFindUniqueOrThrowArgs} args - Arguments to find a AssetShare
     * @example
     * // Get one AssetShare
     * const assetShare = await prisma.assetShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetShareFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareFindFirstArgs} args - Arguments to find a AssetShare
     * @example
     * // Get one AssetShare
     * const assetShare = await prisma.assetShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetShareFindFirstArgs>(args?: SelectSubset<T, AssetShareFindFirstArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareFindFirstOrThrowArgs} args - Arguments to find a AssetShare
     * @example
     * // Get one AssetShare
     * const assetShare = await prisma.assetShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetShareFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetShares
     * const assetShares = await prisma.assetShare.findMany()
     * 
     * // Get first 10 AssetShares
     * const assetShares = await prisma.assetShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetShareWithIdOnly = await prisma.assetShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetShareFindManyArgs>(args?: SelectSubset<T, AssetShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetShare.
     * @param {AssetShareCreateArgs} args - Arguments to create a AssetShare.
     * @example
     * // Create one AssetShare
     * const AssetShare = await prisma.assetShare.create({
     *   data: {
     *     // ... data to create a AssetShare
     *   }
     * })
     * 
     */
    create<T extends AssetShareCreateArgs>(args: SelectSubset<T, AssetShareCreateArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetShares.
     * @param {AssetShareCreateManyArgs} args - Arguments to create many AssetShares.
     * @example
     * // Create many AssetShares
     * const assetShare = await prisma.assetShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetShareCreateManyArgs>(args?: SelectSubset<T, AssetShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetShares and returns the data saved in the database.
     * @param {AssetShareCreateManyAndReturnArgs} args - Arguments to create many AssetShares.
     * @example
     * // Create many AssetShares
     * const assetShare = await prisma.assetShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetShares and only return the `id`
     * const assetShareWithIdOnly = await prisma.assetShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetShareCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssetShare.
     * @param {AssetShareDeleteArgs} args - Arguments to delete one AssetShare.
     * @example
     * // Delete one AssetShare
     * const AssetShare = await prisma.assetShare.delete({
     *   where: {
     *     // ... filter to delete one AssetShare
     *   }
     * })
     * 
     */
    delete<T extends AssetShareDeleteArgs>(args: SelectSubset<T, AssetShareDeleteArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetShare.
     * @param {AssetShareUpdateArgs} args - Arguments to update one AssetShare.
     * @example
     * // Update one AssetShare
     * const assetShare = await prisma.assetShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetShareUpdateArgs>(args: SelectSubset<T, AssetShareUpdateArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetShares.
     * @param {AssetShareDeleteManyArgs} args - Arguments to filter AssetShares to delete.
     * @example
     * // Delete a few AssetShares
     * const { count } = await prisma.assetShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetShareDeleteManyArgs>(args?: SelectSubset<T, AssetShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetShares
     * const assetShare = await prisma.assetShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetShareUpdateManyArgs>(args: SelectSubset<T, AssetShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetShares and returns the data updated in the database.
     * @param {AssetShareUpdateManyAndReturnArgs} args - Arguments to update many AssetShares.
     * @example
     * // Update many AssetShares
     * const assetShare = await prisma.assetShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetShares and only return the `id`
     * const assetShareWithIdOnly = await prisma.assetShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetShareUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssetShare.
     * @param {AssetShareUpsertArgs} args - Arguments to update or create a AssetShare.
     * @example
     * // Update or create a AssetShare
     * const assetShare = await prisma.assetShare.upsert({
     *   create: {
     *     // ... data to create a AssetShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetShare we want to update
     *   }
     * })
     */
    upsert<T extends AssetShareUpsertArgs>(args: SelectSubset<T, AssetShareUpsertArgs<ExtArgs>>): Prisma__AssetShareClient<$Result.GetResult<Prisma.$AssetSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareCountArgs} args - Arguments to filter AssetShares to count.
     * @example
     * // Count the number of AssetShares
     * const count = await prisma.assetShare.count({
     *   where: {
     *     // ... the filter for the AssetShares we want to count
     *   }
     * })
    **/
    count<T extends AssetShareCountArgs>(
      args?: Subset<T, AssetShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetShareAggregateArgs>(args: Subset<T, AssetShareAggregateArgs>): Prisma.PrismaPromise<GetAssetShareAggregateType<T>>

    /**
     * Group by AssetShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetShareGroupByArgs['orderBy'] }
        : { orderBy?: AssetShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetShare model
   */
  readonly fields: AssetShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends AssetShare$userArgs<ExtArgs> = {}>(args?: Subset<T, AssetShare$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetShare model
   */
  interface AssetShareFieldRefs {
    readonly id: FieldRef<"AssetShare", 'String'>
    readonly asset_id: FieldRef<"AssetShare", 'String'>
    readonly shared_by: FieldRef<"AssetShare", 'String'>
    readonly share_type: FieldRef<"AssetShare", 'String'>
    readonly share_token: FieldRef<"AssetShare", 'String'>
    readonly user_id: FieldRef<"AssetShare", 'String'>
    readonly is_active: FieldRef<"AssetShare", 'Boolean'>
    readonly created_at: FieldRef<"AssetShare", 'DateTime'>
    readonly updated_at: FieldRef<"AssetShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssetShare findUnique
   */
  export type AssetShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * Filter, which AssetShare to fetch.
     */
    where: AssetShareWhereUniqueInput
  }

  /**
   * AssetShare findUniqueOrThrow
   */
  export type AssetShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * Filter, which AssetShare to fetch.
     */
    where: AssetShareWhereUniqueInput
  }

  /**
   * AssetShare findFirst
   */
  export type AssetShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * Filter, which AssetShare to fetch.
     */
    where?: AssetShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetShares to fetch.
     */
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetShares.
     */
    cursor?: AssetShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetShares.
     */
    distinct?: AssetShareScalarFieldEnum | AssetShareScalarFieldEnum[]
  }

  /**
   * AssetShare findFirstOrThrow
   */
  export type AssetShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * Filter, which AssetShare to fetch.
     */
    where?: AssetShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetShares to fetch.
     */
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetShares.
     */
    cursor?: AssetShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetShares.
     */
    distinct?: AssetShareScalarFieldEnum | AssetShareScalarFieldEnum[]
  }

  /**
   * AssetShare findMany
   */
  export type AssetShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * Filter, which AssetShares to fetch.
     */
    where?: AssetShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetShares to fetch.
     */
    orderBy?: AssetShareOrderByWithRelationInput | AssetShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetShares.
     */
    cursor?: AssetShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetShares.
     */
    skip?: number
    distinct?: AssetShareScalarFieldEnum | AssetShareScalarFieldEnum[]
  }

  /**
   * AssetShare create
   */
  export type AssetShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetShare.
     */
    data: XOR<AssetShareCreateInput, AssetShareUncheckedCreateInput>
  }

  /**
   * AssetShare createMany
   */
  export type AssetShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetShares.
     */
    data: AssetShareCreateManyInput | AssetShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetShare createManyAndReturn
   */
  export type AssetShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * The data used to create many AssetShares.
     */
    data: AssetShareCreateManyInput | AssetShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetShare update
   */
  export type AssetShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetShare.
     */
    data: XOR<AssetShareUpdateInput, AssetShareUncheckedUpdateInput>
    /**
     * Choose, which AssetShare to update.
     */
    where: AssetShareWhereUniqueInput
  }

  /**
   * AssetShare updateMany
   */
  export type AssetShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetShares.
     */
    data: XOR<AssetShareUpdateManyMutationInput, AssetShareUncheckedUpdateManyInput>
    /**
     * Filter which AssetShares to update
     */
    where?: AssetShareWhereInput
    /**
     * Limit how many AssetShares to update.
     */
    limit?: number
  }

  /**
   * AssetShare updateManyAndReturn
   */
  export type AssetShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * The data used to update AssetShares.
     */
    data: XOR<AssetShareUpdateManyMutationInput, AssetShareUncheckedUpdateManyInput>
    /**
     * Filter which AssetShares to update
     */
    where?: AssetShareWhereInput
    /**
     * Limit how many AssetShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetShare upsert
   */
  export type AssetShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetShare to update in case it exists.
     */
    where: AssetShareWhereUniqueInput
    /**
     * In case the AssetShare found by the `where` argument doesn't exist, create a new AssetShare with this data.
     */
    create: XOR<AssetShareCreateInput, AssetShareUncheckedCreateInput>
    /**
     * In case the AssetShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetShareUpdateInput, AssetShareUncheckedUpdateInput>
  }

  /**
   * AssetShare delete
   */
  export type AssetShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
    /**
     * Filter which AssetShare to delete.
     */
    where: AssetShareWhereUniqueInput
  }

  /**
   * AssetShare deleteMany
   */
  export type AssetShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetShares to delete
     */
    where?: AssetShareWhereInput
    /**
     * Limit how many AssetShares to delete.
     */
    limit?: number
  }

  /**
   * AssetShare.user
   */
  export type AssetShare$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AssetShare without action
   */
  export type AssetShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetShare
     */
    select?: AssetShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetShare
     */
    omit?: AssetShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetShareInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    status: 'status',
    inviteBy: 'inviteBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    acceptedAt: 'acceptedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    asset_id: 'asset_id',
    filename: 'filename',
    mime_type: 'mime_type',
    storage_path: 'storage_path',
    uploader_id: 'uploader_id',
    group_id: 'group_id',
    size_bytes: 'size_bytes',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AssetMetadataScalarFieldEnum: {
    metadata_id: 'metadata_id',
    asset_id: 'asset_id',
    key: 'key',
    value: 'value',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AssetMetadataScalarFieldEnum = (typeof AssetMetadataScalarFieldEnum)[keyof typeof AssetMetadataScalarFieldEnum]


  export const TranscodingJobScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    job_id: 'job_id',
    worker_name: 'worker_name',
    event_name: 'event_name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TranscodingJobScalarFieldEnum = (typeof TranscodingJobScalarFieldEnum)[keyof typeof TranscodingJobScalarFieldEnum]


  export const AssetShareScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    shared_by: 'shared_by',
    share_type: 'share_type',
    share_token: 'share_token',
    user_id: 'user_id',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AssetShareScalarFieldEnum = (typeof AssetShareScalarFieldEnum)[keyof typeof AssetShareScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InvitationRole'
   */
  export type EnumInvitationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationRole'>
    


  /**
   * Reference to a field of type 'InvitationRole[]'
   */
  export type ListEnumInvitationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationRole[]'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AssetStatus'
   */
  export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>
    


  /**
   * Reference to a field of type 'AssetStatus[]'
   */
  export type ListEnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentInvites?: InvitationListRelationFilter
    assets?: AssetListRelationFilter
    sharedAssets?: AssetShareListRelationFilter
    restrictedShares?: AssetShareListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentInvites?: InvitationOrderByRelationAggregateInput
    assets?: AssetOrderByRelationAggregateInput
    sharedAssets?: AssetShareOrderByRelationAggregateInput
    restrictedShares?: AssetShareOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentInvites?: InvitationListRelationFilter
    assets?: AssetListRelationFilter
    sharedAssets?: AssetShareListRelationFilter
    restrictedShares?: AssetShareListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: EnumInvitationRoleFilter<"Invitation"> | $Enums.InvitationRole
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    inviteBy?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    invitedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    invitedBy?: UserOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    email?: StringFilter<"Invitation"> | string
    role?: EnumInvitationRoleFilter<"Invitation"> | $Enums.InvitationRole
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    inviteBy?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    invitedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    email?: StringWithAggregatesFilter<"Invitation"> | string
    role?: EnumInvitationRoleWithAggregatesFilter<"Invitation"> | $Enums.InvitationRole
    status?: EnumInvitationStatusWithAggregatesFilter<"Invitation"> | $Enums.InvitationStatus
    inviteBy?: StringWithAggregatesFilter<"Invitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    asset_id?: StringFilter<"Asset"> | string
    filename?: StringFilter<"Asset"> | string
    mime_type?: StringFilter<"Asset"> | string
    storage_path?: StringFilter<"Asset"> | string
    uploader_id?: StringFilter<"Asset"> | string
    group_id?: StringNullableFilter<"Asset"> | string | null
    size_bytes?: IntFilter<"Asset"> | number
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    created_at?: DateTimeFilter<"Asset"> | Date | string
    updated_at?: DateTimeFilter<"Asset"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    metadata?: AssetMetadataListRelationFilter
    transcodingJobs?: TranscodingJobListRelationFilter
    shares?: AssetShareListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    asset_id?: SortOrder
    filename?: SortOrder
    mime_type?: SortOrder
    storage_path?: SortOrder
    uploader_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    size_bytes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    uploader?: UserOrderByWithRelationInput
    metadata?: AssetMetadataOrderByRelationAggregateInput
    transcodingJobs?: TranscodingJobOrderByRelationAggregateInput
    shares?: AssetShareOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    asset_id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    filename?: StringFilter<"Asset"> | string
    mime_type?: StringFilter<"Asset"> | string
    storage_path?: StringFilter<"Asset"> | string
    uploader_id?: StringFilter<"Asset"> | string
    group_id?: StringNullableFilter<"Asset"> | string | null
    size_bytes?: IntFilter<"Asset"> | number
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    created_at?: DateTimeFilter<"Asset"> | Date | string
    updated_at?: DateTimeFilter<"Asset"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
    metadata?: AssetMetadataListRelationFilter
    transcodingJobs?: TranscodingJobListRelationFilter
    shares?: AssetShareListRelationFilter
  }, "asset_id">

  export type AssetOrderByWithAggregationInput = {
    asset_id?: SortOrder
    filename?: SortOrder
    mime_type?: SortOrder
    storage_path?: SortOrder
    uploader_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    size_bytes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    asset_id?: StringWithAggregatesFilter<"Asset"> | string
    filename?: StringWithAggregatesFilter<"Asset"> | string
    mime_type?: StringWithAggregatesFilter<"Asset"> | string
    storage_path?: StringWithAggregatesFilter<"Asset"> | string
    uploader_id?: StringWithAggregatesFilter<"Asset"> | string
    group_id?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    size_bytes?: IntWithAggregatesFilter<"Asset"> | number
    status?: EnumAssetStatusWithAggregatesFilter<"Asset"> | $Enums.AssetStatus
    created_at?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type AssetMetadataWhereInput = {
    AND?: AssetMetadataWhereInput | AssetMetadataWhereInput[]
    OR?: AssetMetadataWhereInput[]
    NOT?: AssetMetadataWhereInput | AssetMetadataWhereInput[]
    metadata_id?: StringFilter<"AssetMetadata"> | string
    asset_id?: StringFilter<"AssetMetadata"> | string
    key?: StringFilter<"AssetMetadata"> | string
    value?: JsonFilter<"AssetMetadata">
    created_at?: DateTimeFilter<"AssetMetadata"> | Date | string
    updated_at?: DateTimeFilter<"AssetMetadata"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type AssetMetadataOrderByWithRelationInput = {
    metadata_id?: SortOrder
    asset_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type AssetMetadataWhereUniqueInput = Prisma.AtLeast<{
    metadata_id?: string
    asset_id_key?: AssetMetadataAsset_idKeyCompoundUniqueInput
    AND?: AssetMetadataWhereInput | AssetMetadataWhereInput[]
    OR?: AssetMetadataWhereInput[]
    NOT?: AssetMetadataWhereInput | AssetMetadataWhereInput[]
    asset_id?: StringFilter<"AssetMetadata"> | string
    key?: StringFilter<"AssetMetadata"> | string
    value?: JsonFilter<"AssetMetadata">
    created_at?: DateTimeFilter<"AssetMetadata"> | Date | string
    updated_at?: DateTimeFilter<"AssetMetadata"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "metadata_id" | "asset_id_key">

  export type AssetMetadataOrderByWithAggregationInput = {
    metadata_id?: SortOrder
    asset_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AssetMetadataCountOrderByAggregateInput
    _max?: AssetMetadataMaxOrderByAggregateInput
    _min?: AssetMetadataMinOrderByAggregateInput
  }

  export type AssetMetadataScalarWhereWithAggregatesInput = {
    AND?: AssetMetadataScalarWhereWithAggregatesInput | AssetMetadataScalarWhereWithAggregatesInput[]
    OR?: AssetMetadataScalarWhereWithAggregatesInput[]
    NOT?: AssetMetadataScalarWhereWithAggregatesInput | AssetMetadataScalarWhereWithAggregatesInput[]
    metadata_id?: StringWithAggregatesFilter<"AssetMetadata"> | string
    asset_id?: StringWithAggregatesFilter<"AssetMetadata"> | string
    key?: StringWithAggregatesFilter<"AssetMetadata"> | string
    value?: JsonWithAggregatesFilter<"AssetMetadata">
    created_at?: DateTimeWithAggregatesFilter<"AssetMetadata"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AssetMetadata"> | Date | string
  }

  export type TranscodingJobWhereInput = {
    AND?: TranscodingJobWhereInput | TranscodingJobWhereInput[]
    OR?: TranscodingJobWhereInput[]
    NOT?: TranscodingJobWhereInput | TranscodingJobWhereInput[]
    id?: StringFilter<"TranscodingJob"> | string
    asset_id?: StringFilter<"TranscodingJob"> | string
    job_id?: StringFilter<"TranscodingJob"> | string
    worker_name?: StringFilter<"TranscodingJob"> | string
    event_name?: StringFilter<"TranscodingJob"> | string
    status?: EnumJobStatusFilter<"TranscodingJob"> | $Enums.JobStatus
    created_at?: DateTimeFilter<"TranscodingJob"> | Date | string
    updated_at?: DateTimeFilter<"TranscodingJob"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type TranscodingJobOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    job_id?: SortOrder
    worker_name?: SortOrder
    event_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type TranscodingJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    job_id?: string
    AND?: TranscodingJobWhereInput | TranscodingJobWhereInput[]
    OR?: TranscodingJobWhereInput[]
    NOT?: TranscodingJobWhereInput | TranscodingJobWhereInput[]
    asset_id?: StringFilter<"TranscodingJob"> | string
    worker_name?: StringFilter<"TranscodingJob"> | string
    event_name?: StringFilter<"TranscodingJob"> | string
    status?: EnumJobStatusFilter<"TranscodingJob"> | $Enums.JobStatus
    created_at?: DateTimeFilter<"TranscodingJob"> | Date | string
    updated_at?: DateTimeFilter<"TranscodingJob"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id" | "job_id">

  export type TranscodingJobOrderByWithAggregationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    job_id?: SortOrder
    worker_name?: SortOrder
    event_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TranscodingJobCountOrderByAggregateInput
    _max?: TranscodingJobMaxOrderByAggregateInput
    _min?: TranscodingJobMinOrderByAggregateInput
  }

  export type TranscodingJobScalarWhereWithAggregatesInput = {
    AND?: TranscodingJobScalarWhereWithAggregatesInput | TranscodingJobScalarWhereWithAggregatesInput[]
    OR?: TranscodingJobScalarWhereWithAggregatesInput[]
    NOT?: TranscodingJobScalarWhereWithAggregatesInput | TranscodingJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TranscodingJob"> | string
    asset_id?: StringWithAggregatesFilter<"TranscodingJob"> | string
    job_id?: StringWithAggregatesFilter<"TranscodingJob"> | string
    worker_name?: StringWithAggregatesFilter<"TranscodingJob"> | string
    event_name?: StringWithAggregatesFilter<"TranscodingJob"> | string
    status?: EnumJobStatusWithAggregatesFilter<"TranscodingJob"> | $Enums.JobStatus
    created_at?: DateTimeWithAggregatesFilter<"TranscodingJob"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TranscodingJob"> | Date | string
  }

  export type AssetShareWhereInput = {
    AND?: AssetShareWhereInput | AssetShareWhereInput[]
    OR?: AssetShareWhereInput[]
    NOT?: AssetShareWhereInput | AssetShareWhereInput[]
    id?: StringFilter<"AssetShare"> | string
    asset_id?: StringFilter<"AssetShare"> | string
    shared_by?: StringFilter<"AssetShare"> | string
    share_type?: StringFilter<"AssetShare"> | string
    share_token?: StringFilter<"AssetShare"> | string
    user_id?: StringNullableFilter<"AssetShare"> | string | null
    is_active?: BoolFilter<"AssetShare"> | boolean
    created_at?: DateTimeFilter<"AssetShare"> | Date | string
    updated_at?: DateTimeFilter<"AssetShare"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    sharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AssetShareOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    shared_by?: SortOrder
    share_type?: SortOrder
    share_token?: SortOrder
    user_id?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    asset?: AssetOrderByWithRelationInput
    sharedBy?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AssetShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    share_token?: string
    AND?: AssetShareWhereInput | AssetShareWhereInput[]
    OR?: AssetShareWhereInput[]
    NOT?: AssetShareWhereInput | AssetShareWhereInput[]
    asset_id?: StringFilter<"AssetShare"> | string
    shared_by?: StringFilter<"AssetShare"> | string
    share_type?: StringFilter<"AssetShare"> | string
    user_id?: StringNullableFilter<"AssetShare"> | string | null
    is_active?: BoolFilter<"AssetShare"> | boolean
    created_at?: DateTimeFilter<"AssetShare"> | Date | string
    updated_at?: DateTimeFilter<"AssetShare"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    sharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "share_token">

  export type AssetShareOrderByWithAggregationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    shared_by?: SortOrder
    share_type?: SortOrder
    share_token?: SortOrder
    user_id?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AssetShareCountOrderByAggregateInput
    _max?: AssetShareMaxOrderByAggregateInput
    _min?: AssetShareMinOrderByAggregateInput
  }

  export type AssetShareScalarWhereWithAggregatesInput = {
    AND?: AssetShareScalarWhereWithAggregatesInput | AssetShareScalarWhereWithAggregatesInput[]
    OR?: AssetShareScalarWhereWithAggregatesInput[]
    NOT?: AssetShareScalarWhereWithAggregatesInput | AssetShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetShare"> | string
    asset_id?: StringWithAggregatesFilter<"AssetShare"> | string
    shared_by?: StringWithAggregatesFilter<"AssetShare"> | string
    share_type?: StringWithAggregatesFilter<"AssetShare"> | string
    share_token?: StringWithAggregatesFilter<"AssetShare"> | string
    user_id?: StringNullableWithAggregatesFilter<"AssetShare"> | string | null
    is_active?: BoolWithAggregatesFilter<"AssetShare"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"AssetShare"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AssetShare"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationCreateNestedManyWithoutInvitedByInput
    assets?: AssetCreateNestedManyWithoutUploaderInput
    sharedAssets?: AssetShareCreateNestedManyWithoutSharedByInput
    restrictedShares?: AssetShareCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
    assets?: AssetUncheckedCreateNestedManyWithoutUploaderInput
    sharedAssets?: AssetShareUncheckedCreateNestedManyWithoutSharedByInput
    restrictedShares?: AssetShareUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUpdateManyWithoutInvitedByNestedInput
    assets?: AssetUpdateManyWithoutUploaderNestedInput
    sharedAssets?: AssetShareUpdateManyWithoutSharedByNestedInput
    restrictedShares?: AssetShareUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    assets?: AssetUncheckedUpdateManyWithoutUploaderNestedInput
    sharedAssets?: AssetShareUncheckedUpdateManyWithoutSharedByNestedInput
    restrictedShares?: AssetShareUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    email: string
    role: $Enums.InvitationRole
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAt?: Date | string | null
    invitedBy: UserCreateNestedOneWithoutSentInvitesInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    email: string
    role: $Enums.InvitationRole
    status?: $Enums.InvitationStatus
    inviteBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedBy?: UserUpdateOneRequiredWithoutSentInvitesNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    inviteBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationCreateManyInput = {
    id?: string
    email: string
    role: $Enums.InvitationRole
    status?: $Enums.InvitationStatus
    inviteBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    inviteBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetCreateInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    uploader: UserCreateNestedOneWithoutAssetsInput
    metadata?: AssetMetadataCreateNestedManyWithoutAssetInput
    transcodingJobs?: TranscodingJobCreateNestedManyWithoutAssetInput
    shares?: AssetShareCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    uploader_id: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    metadata?: AssetMetadataUncheckedCreateNestedManyWithoutAssetInput
    transcodingJobs?: TranscodingJobUncheckedCreateNestedManyWithoutAssetInput
    shares?: AssetShareUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutAssetsNestedInput
    metadata?: AssetMetadataUpdateManyWithoutAssetNestedInput
    transcodingJobs?: TranscodingJobUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: AssetMetadataUncheckedUpdateManyWithoutAssetNestedInput
    transcodingJobs?: TranscodingJobUncheckedUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    uploader_id: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetMetadataCreateInput = {
    metadata_id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    asset: AssetCreateNestedOneWithoutMetadataInput
  }

  export type AssetMetadataUncheckedCreateInput = {
    metadata_id?: string
    asset_id: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetMetadataUpdateInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutMetadataNestedInput
  }

  export type AssetMetadataUncheckedUpdateInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetMetadataCreateManyInput = {
    metadata_id?: string
    asset_id: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetMetadataUpdateManyMutationInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetMetadataUncheckedUpdateManyInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscodingJobCreateInput = {
    id?: string
    job_id: string
    worker_name?: string
    event_name?: string
    status?: $Enums.JobStatus
    created_at?: Date | string
    updated_at?: Date | string
    asset: AssetCreateNestedOneWithoutTranscodingJobsInput
  }

  export type TranscodingJobUncheckedCreateInput = {
    id?: string
    asset_id: string
    job_id: string
    worker_name?: string
    event_name?: string
    status?: $Enums.JobStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TranscodingJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutTranscodingJobsNestedInput
  }

  export type TranscodingJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscodingJobCreateManyInput = {
    id?: string
    asset_id: string
    job_id: string
    worker_name?: string
    event_name?: string
    status?: $Enums.JobStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TranscodingJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscodingJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareCreateInput = {
    id?: string
    share_type: string
    share_token: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    asset: AssetCreateNestedOneWithoutSharesInput
    sharedBy: UserCreateNestedOneWithoutSharedAssetsInput
    user?: UserCreateNestedOneWithoutRestrictedSharesInput
  }

  export type AssetShareUncheckedCreateInput = {
    id?: string
    asset_id: string
    shared_by: string
    share_type: string
    share_token: string
    user_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutSharesNestedInput
    sharedBy?: UserUpdateOneRequiredWithoutSharedAssetsNestedInput
    user?: UserUpdateOneWithoutRestrictedSharesNestedInput
  }

  export type AssetShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareCreateManyInput = {
    id?: string
    asset_id: string
    shared_by: string
    share_type: string
    share_token: string
    user_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type AssetShareListRelationFilter = {
    every?: AssetShareWhereInput
    some?: AssetShareWhereInput
    none?: AssetShareWhereInput
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumInvitationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationRole | EnumInvitationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationRoleFilter<$PrismaModel> | $Enums.InvitationRole
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type EnumInvitationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationRole | EnumInvitationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationRoleWithAggregatesFilter<$PrismaModel> | $Enums.InvitationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationRoleFilter<$PrismaModel>
    _max?: NestedEnumInvitationRoleFilter<$PrismaModel>
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type AssetMetadataListRelationFilter = {
    every?: AssetMetadataWhereInput
    some?: AssetMetadataWhereInput
    none?: AssetMetadataWhereInput
  }

  export type TranscodingJobListRelationFilter = {
    every?: TranscodingJobWhereInput
    some?: TranscodingJobWhereInput
    none?: TranscodingJobWhereInput
  }

  export type AssetMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TranscodingJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetCountOrderByAggregateInput = {
    asset_id?: SortOrder
    filename?: SortOrder
    mime_type?: SortOrder
    storage_path?: SortOrder
    uploader_id?: SortOrder
    group_id?: SortOrder
    size_bytes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    size_bytes?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    asset_id?: SortOrder
    filename?: SortOrder
    mime_type?: SortOrder
    storage_path?: SortOrder
    uploader_id?: SortOrder
    group_id?: SortOrder
    size_bytes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    asset_id?: SortOrder
    filename?: SortOrder
    mime_type?: SortOrder
    storage_path?: SortOrder
    uploader_id?: SortOrder
    group_id?: SortOrder
    size_bytes?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    size_bytes?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type AssetMetadataAsset_idKeyCompoundUniqueInput = {
    asset_id: string
    key: string
  }

  export type AssetMetadataCountOrderByAggregateInput = {
    metadata_id?: SortOrder
    asset_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetMetadataMaxOrderByAggregateInput = {
    metadata_id?: SortOrder
    asset_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetMetadataMinOrderByAggregateInput = {
    metadata_id?: SortOrder
    asset_id?: SortOrder
    key?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type TranscodingJobCountOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    job_id?: SortOrder
    worker_name?: SortOrder
    event_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TranscodingJobMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    job_id?: SortOrder
    worker_name?: SortOrder
    event_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TranscodingJobMinOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    job_id?: SortOrder
    worker_name?: SortOrder
    event_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AssetShareCountOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    shared_by?: SortOrder
    share_type?: SortOrder
    share_token?: SortOrder
    user_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetShareMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    shared_by?: SortOrder
    share_type?: SortOrder
    share_token?: SortOrder
    user_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AssetShareMinOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    shared_by?: SortOrder
    share_type?: SortOrder
    share_token?: SortOrder
    user_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InvitationCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type AssetCreateNestedManyWithoutUploaderInput = {
    create?: XOR<AssetCreateWithoutUploaderInput, AssetUncheckedCreateWithoutUploaderInput> | AssetCreateWithoutUploaderInput[] | AssetUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutUploaderInput | AssetCreateOrConnectWithoutUploaderInput[]
    createMany?: AssetCreateManyUploaderInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetShareCreateNestedManyWithoutSharedByInput = {
    create?: XOR<AssetShareCreateWithoutSharedByInput, AssetShareUncheckedCreateWithoutSharedByInput> | AssetShareCreateWithoutSharedByInput[] | AssetShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutSharedByInput | AssetShareCreateOrConnectWithoutSharedByInput[]
    createMany?: AssetShareCreateManySharedByInputEnvelope
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
  }

  export type AssetShareCreateNestedManyWithoutUserInput = {
    create?: XOR<AssetShareCreateWithoutUserInput, AssetShareUncheckedCreateWithoutUserInput> | AssetShareCreateWithoutUserInput[] | AssetShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutUserInput | AssetShareCreateOrConnectWithoutUserInput[]
    createMany?: AssetShareCreateManyUserInputEnvelope
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<AssetCreateWithoutUploaderInput, AssetUncheckedCreateWithoutUploaderInput> | AssetCreateWithoutUploaderInput[] | AssetUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutUploaderInput | AssetCreateOrConnectWithoutUploaderInput[]
    createMany?: AssetCreateManyUploaderInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetShareUncheckedCreateNestedManyWithoutSharedByInput = {
    create?: XOR<AssetShareCreateWithoutSharedByInput, AssetShareUncheckedCreateWithoutSharedByInput> | AssetShareCreateWithoutSharedByInput[] | AssetShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutSharedByInput | AssetShareCreateOrConnectWithoutSharedByInput[]
    createMany?: AssetShareCreateManySharedByInputEnvelope
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
  }

  export type AssetShareUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssetShareCreateWithoutUserInput, AssetShareUncheckedCreateWithoutUserInput> | AssetShareCreateWithoutUserInput[] | AssetShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutUserInput | AssetShareCreateOrConnectWithoutUserInput[]
    createMany?: AssetShareCreateManyUserInputEnvelope
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInvitedByInput | InvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInvitedByInput | InvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInvitedByInput | InvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type AssetUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<AssetCreateWithoutUploaderInput, AssetUncheckedCreateWithoutUploaderInput> | AssetCreateWithoutUploaderInput[] | AssetUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutUploaderInput | AssetCreateOrConnectWithoutUploaderInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutUploaderInput | AssetUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: AssetCreateManyUploaderInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutUploaderInput | AssetUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutUploaderInput | AssetUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetShareUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<AssetShareCreateWithoutSharedByInput, AssetShareUncheckedCreateWithoutSharedByInput> | AssetShareCreateWithoutSharedByInput[] | AssetShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutSharedByInput | AssetShareCreateOrConnectWithoutSharedByInput[]
    upsert?: AssetShareUpsertWithWhereUniqueWithoutSharedByInput | AssetShareUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: AssetShareCreateManySharedByInputEnvelope
    set?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    disconnect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    delete?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    update?: AssetShareUpdateWithWhereUniqueWithoutSharedByInput | AssetShareUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: AssetShareUpdateManyWithWhereWithoutSharedByInput | AssetShareUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
  }

  export type AssetShareUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssetShareCreateWithoutUserInput, AssetShareUncheckedCreateWithoutUserInput> | AssetShareCreateWithoutUserInput[] | AssetShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutUserInput | AssetShareCreateOrConnectWithoutUserInput[]
    upsert?: AssetShareUpsertWithWhereUniqueWithoutUserInput | AssetShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssetShareCreateManyUserInputEnvelope
    set?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    disconnect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    delete?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    update?: AssetShareUpdateWithWhereUniqueWithoutUserInput | AssetShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssetShareUpdateManyWithWhereWithoutUserInput | AssetShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInvitedByInput | InvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInvitedByInput | InvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInvitedByInput | InvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<AssetCreateWithoutUploaderInput, AssetUncheckedCreateWithoutUploaderInput> | AssetCreateWithoutUploaderInput[] | AssetUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutUploaderInput | AssetCreateOrConnectWithoutUploaderInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutUploaderInput | AssetUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: AssetCreateManyUploaderInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutUploaderInput | AssetUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutUploaderInput | AssetUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetShareUncheckedUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<AssetShareCreateWithoutSharedByInput, AssetShareUncheckedCreateWithoutSharedByInput> | AssetShareCreateWithoutSharedByInput[] | AssetShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutSharedByInput | AssetShareCreateOrConnectWithoutSharedByInput[]
    upsert?: AssetShareUpsertWithWhereUniqueWithoutSharedByInput | AssetShareUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: AssetShareCreateManySharedByInputEnvelope
    set?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    disconnect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    delete?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    update?: AssetShareUpdateWithWhereUniqueWithoutSharedByInput | AssetShareUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: AssetShareUpdateManyWithWhereWithoutSharedByInput | AssetShareUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
  }

  export type AssetShareUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssetShareCreateWithoutUserInput, AssetShareUncheckedCreateWithoutUserInput> | AssetShareCreateWithoutUserInput[] | AssetShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutUserInput | AssetShareCreateOrConnectWithoutUserInput[]
    upsert?: AssetShareUpsertWithWhereUniqueWithoutUserInput | AssetShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssetShareCreateManyUserInputEnvelope
    set?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    disconnect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    delete?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    update?: AssetShareUpdateWithWhereUniqueWithoutUserInput | AssetShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssetShareUpdateManyWithWhereWithoutUserInput | AssetShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentInvitesInput = {
    create?: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInvitationRoleFieldUpdateOperationsInput = {
    set?: $Enums.InvitationRole
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSentInvitesNestedInput = {
    create?: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitesInput
    upsert?: UserUpsertWithoutSentInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInvitesInput, UserUpdateWithoutSentInvitesInput>, UserUncheckedUpdateWithoutSentInvitesInput>
  }

  export type UserCreateNestedOneWithoutAssetsInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetMetadataCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetMetadataCreateWithoutAssetInput, AssetMetadataUncheckedCreateWithoutAssetInput> | AssetMetadataCreateWithoutAssetInput[] | AssetMetadataUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetMetadataCreateOrConnectWithoutAssetInput | AssetMetadataCreateOrConnectWithoutAssetInput[]
    createMany?: AssetMetadataCreateManyAssetInputEnvelope
    connect?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
  }

  export type TranscodingJobCreateNestedManyWithoutAssetInput = {
    create?: XOR<TranscodingJobCreateWithoutAssetInput, TranscodingJobUncheckedCreateWithoutAssetInput> | TranscodingJobCreateWithoutAssetInput[] | TranscodingJobUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TranscodingJobCreateOrConnectWithoutAssetInput | TranscodingJobCreateOrConnectWithoutAssetInput[]
    createMany?: TranscodingJobCreateManyAssetInputEnvelope
    connect?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
  }

  export type AssetShareCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetShareCreateWithoutAssetInput, AssetShareUncheckedCreateWithoutAssetInput> | AssetShareCreateWithoutAssetInput[] | AssetShareUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutAssetInput | AssetShareCreateOrConnectWithoutAssetInput[]
    createMany?: AssetShareCreateManyAssetInputEnvelope
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
  }

  export type AssetMetadataUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetMetadataCreateWithoutAssetInput, AssetMetadataUncheckedCreateWithoutAssetInput> | AssetMetadataCreateWithoutAssetInput[] | AssetMetadataUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetMetadataCreateOrConnectWithoutAssetInput | AssetMetadataCreateOrConnectWithoutAssetInput[]
    createMany?: AssetMetadataCreateManyAssetInputEnvelope
    connect?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
  }

  export type TranscodingJobUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<TranscodingJobCreateWithoutAssetInput, TranscodingJobUncheckedCreateWithoutAssetInput> | TranscodingJobCreateWithoutAssetInput[] | TranscodingJobUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TranscodingJobCreateOrConnectWithoutAssetInput | TranscodingJobCreateOrConnectWithoutAssetInput[]
    createMany?: TranscodingJobCreateManyAssetInputEnvelope
    connect?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
  }

  export type AssetShareUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetShareCreateWithoutAssetInput, AssetShareUncheckedCreateWithoutAssetInput> | AssetShareCreateWithoutAssetInput[] | AssetShareUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutAssetInput | AssetShareCreateOrConnectWithoutAssetInput[]
    createMany?: AssetShareCreateManyAssetInputEnvelope
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus
  }

  export type UserUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssetsInput
    upsert?: UserUpsertWithoutAssetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssetsInput, UserUpdateWithoutAssetsInput>, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetMetadataUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetMetadataCreateWithoutAssetInput, AssetMetadataUncheckedCreateWithoutAssetInput> | AssetMetadataCreateWithoutAssetInput[] | AssetMetadataUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetMetadataCreateOrConnectWithoutAssetInput | AssetMetadataCreateOrConnectWithoutAssetInput[]
    upsert?: AssetMetadataUpsertWithWhereUniqueWithoutAssetInput | AssetMetadataUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetMetadataCreateManyAssetInputEnvelope
    set?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    disconnect?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    delete?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    connect?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    update?: AssetMetadataUpdateWithWhereUniqueWithoutAssetInput | AssetMetadataUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetMetadataUpdateManyWithWhereWithoutAssetInput | AssetMetadataUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetMetadataScalarWhereInput | AssetMetadataScalarWhereInput[]
  }

  export type TranscodingJobUpdateManyWithoutAssetNestedInput = {
    create?: XOR<TranscodingJobCreateWithoutAssetInput, TranscodingJobUncheckedCreateWithoutAssetInput> | TranscodingJobCreateWithoutAssetInput[] | TranscodingJobUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TranscodingJobCreateOrConnectWithoutAssetInput | TranscodingJobCreateOrConnectWithoutAssetInput[]
    upsert?: TranscodingJobUpsertWithWhereUniqueWithoutAssetInput | TranscodingJobUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: TranscodingJobCreateManyAssetInputEnvelope
    set?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    disconnect?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    delete?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    connect?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    update?: TranscodingJobUpdateWithWhereUniqueWithoutAssetInput | TranscodingJobUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: TranscodingJobUpdateManyWithWhereWithoutAssetInput | TranscodingJobUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: TranscodingJobScalarWhereInput | TranscodingJobScalarWhereInput[]
  }

  export type AssetShareUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetShareCreateWithoutAssetInput, AssetShareUncheckedCreateWithoutAssetInput> | AssetShareCreateWithoutAssetInput[] | AssetShareUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutAssetInput | AssetShareCreateOrConnectWithoutAssetInput[]
    upsert?: AssetShareUpsertWithWhereUniqueWithoutAssetInput | AssetShareUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetShareCreateManyAssetInputEnvelope
    set?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    disconnect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    delete?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    update?: AssetShareUpdateWithWhereUniqueWithoutAssetInput | AssetShareUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetShareUpdateManyWithWhereWithoutAssetInput | AssetShareUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
  }

  export type AssetMetadataUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetMetadataCreateWithoutAssetInput, AssetMetadataUncheckedCreateWithoutAssetInput> | AssetMetadataCreateWithoutAssetInput[] | AssetMetadataUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetMetadataCreateOrConnectWithoutAssetInput | AssetMetadataCreateOrConnectWithoutAssetInput[]
    upsert?: AssetMetadataUpsertWithWhereUniqueWithoutAssetInput | AssetMetadataUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetMetadataCreateManyAssetInputEnvelope
    set?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    disconnect?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    delete?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    connect?: AssetMetadataWhereUniqueInput | AssetMetadataWhereUniqueInput[]
    update?: AssetMetadataUpdateWithWhereUniqueWithoutAssetInput | AssetMetadataUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetMetadataUpdateManyWithWhereWithoutAssetInput | AssetMetadataUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetMetadataScalarWhereInput | AssetMetadataScalarWhereInput[]
  }

  export type TranscodingJobUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<TranscodingJobCreateWithoutAssetInput, TranscodingJobUncheckedCreateWithoutAssetInput> | TranscodingJobCreateWithoutAssetInput[] | TranscodingJobUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: TranscodingJobCreateOrConnectWithoutAssetInput | TranscodingJobCreateOrConnectWithoutAssetInput[]
    upsert?: TranscodingJobUpsertWithWhereUniqueWithoutAssetInput | TranscodingJobUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: TranscodingJobCreateManyAssetInputEnvelope
    set?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    disconnect?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    delete?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    connect?: TranscodingJobWhereUniqueInput | TranscodingJobWhereUniqueInput[]
    update?: TranscodingJobUpdateWithWhereUniqueWithoutAssetInput | TranscodingJobUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: TranscodingJobUpdateManyWithWhereWithoutAssetInput | TranscodingJobUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: TranscodingJobScalarWhereInput | TranscodingJobScalarWhereInput[]
  }

  export type AssetShareUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetShareCreateWithoutAssetInput, AssetShareUncheckedCreateWithoutAssetInput> | AssetShareCreateWithoutAssetInput[] | AssetShareUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetShareCreateOrConnectWithoutAssetInput | AssetShareCreateOrConnectWithoutAssetInput[]
    upsert?: AssetShareUpsertWithWhereUniqueWithoutAssetInput | AssetShareUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetShareCreateManyAssetInputEnvelope
    set?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    disconnect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    delete?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    connect?: AssetShareWhereUniqueInput | AssetShareWhereUniqueInput[]
    update?: AssetShareUpdateWithWhereUniqueWithoutAssetInput | AssetShareUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetShareUpdateManyWithWhereWithoutAssetInput | AssetShareUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutMetadataInput = {
    create?: XOR<AssetCreateWithoutMetadataInput, AssetUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: AssetCreateOrConnectWithoutMetadataInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutMetadataNestedInput = {
    create?: XOR<AssetCreateWithoutMetadataInput, AssetUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: AssetCreateOrConnectWithoutMetadataInput
    upsert?: AssetUpsertWithoutMetadataInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutMetadataInput, AssetUpdateWithoutMetadataInput>, AssetUncheckedUpdateWithoutMetadataInput>
  }

  export type AssetCreateNestedOneWithoutTranscodingJobsInput = {
    create?: XOR<AssetCreateWithoutTranscodingJobsInput, AssetUncheckedCreateWithoutTranscodingJobsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTranscodingJobsInput
    connect?: AssetWhereUniqueInput
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type AssetUpdateOneRequiredWithoutTranscodingJobsNestedInput = {
    create?: XOR<AssetCreateWithoutTranscodingJobsInput, AssetUncheckedCreateWithoutTranscodingJobsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTranscodingJobsInput
    upsert?: AssetUpsertWithoutTranscodingJobsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutTranscodingJobsInput, AssetUpdateWithoutTranscodingJobsInput>, AssetUncheckedUpdateWithoutTranscodingJobsInput>
  }

  export type AssetCreateNestedOneWithoutSharesInput = {
    create?: XOR<AssetCreateWithoutSharesInput, AssetUncheckedCreateWithoutSharesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutSharesInput
    connect?: AssetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedAssetsInput = {
    create?: XOR<UserCreateWithoutSharedAssetsInput, UserUncheckedCreateWithoutSharedAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedAssetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRestrictedSharesInput = {
    create?: XOR<UserCreateWithoutRestrictedSharesInput, UserUncheckedCreateWithoutRestrictedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestrictedSharesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssetUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<AssetCreateWithoutSharesInput, AssetUncheckedCreateWithoutSharesInput>
    connectOrCreate?: AssetCreateOrConnectWithoutSharesInput
    upsert?: AssetUpsertWithoutSharesInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutSharesInput, AssetUpdateWithoutSharesInput>, AssetUncheckedUpdateWithoutSharesInput>
  }

  export type UserUpdateOneRequiredWithoutSharedAssetsNestedInput = {
    create?: XOR<UserCreateWithoutSharedAssetsInput, UserUncheckedCreateWithoutSharedAssetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedAssetsInput
    upsert?: UserUpsertWithoutSharedAssetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedAssetsInput, UserUpdateWithoutSharedAssetsInput>, UserUncheckedUpdateWithoutSharedAssetsInput>
  }

  export type UserUpdateOneWithoutRestrictedSharesNestedInput = {
    create?: XOR<UserCreateWithoutRestrictedSharesInput, UserUncheckedCreateWithoutRestrictedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestrictedSharesInput
    upsert?: UserUpsertWithoutRestrictedSharesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRestrictedSharesInput, UserUpdateWithoutRestrictedSharesInput>, UserUncheckedUpdateWithoutRestrictedSharesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInvitationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationRole | EnumInvitationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationRoleFilter<$PrismaModel> | $Enums.InvitationRole
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumInvitationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationRole | EnumInvitationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationRole[] | ListEnumInvitationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationRoleWithAggregatesFilter<$PrismaModel> | $Enums.InvitationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationRoleFilter<$PrismaModel>
    _max?: NestedEnumInvitationRoleFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | EnumAssetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetStatus[] | ListEnumAssetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetStatusFilter<$PrismaModel>
    _max?: NestedEnumAssetStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InvitationCreateWithoutInvitedByInput = {
    id?: string
    email: string
    role: $Enums.InvitationRole
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string
    email: string
    role: $Enums.InvitationRole
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationCreateOrConnectWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type InvitationCreateManyInvitedByInputEnvelope = {
    data: InvitationCreateManyInvitedByInput | InvitationCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type AssetCreateWithoutUploaderInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    metadata?: AssetMetadataCreateNestedManyWithoutAssetInput
    transcodingJobs?: TranscodingJobCreateNestedManyWithoutAssetInput
    shares?: AssetShareCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutUploaderInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    metadata?: AssetMetadataUncheckedCreateNestedManyWithoutAssetInput
    transcodingJobs?: TranscodingJobUncheckedCreateNestedManyWithoutAssetInput
    shares?: AssetShareUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutUploaderInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutUploaderInput, AssetUncheckedCreateWithoutUploaderInput>
  }

  export type AssetCreateManyUploaderInputEnvelope = {
    data: AssetCreateManyUploaderInput | AssetCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type AssetShareCreateWithoutSharedByInput = {
    id?: string
    share_type: string
    share_token: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    asset: AssetCreateNestedOneWithoutSharesInput
    user?: UserCreateNestedOneWithoutRestrictedSharesInput
  }

  export type AssetShareUncheckedCreateWithoutSharedByInput = {
    id?: string
    asset_id: string
    share_type: string
    share_token: string
    user_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareCreateOrConnectWithoutSharedByInput = {
    where: AssetShareWhereUniqueInput
    create: XOR<AssetShareCreateWithoutSharedByInput, AssetShareUncheckedCreateWithoutSharedByInput>
  }

  export type AssetShareCreateManySharedByInputEnvelope = {
    data: AssetShareCreateManySharedByInput | AssetShareCreateManySharedByInput[]
    skipDuplicates?: boolean
  }

  export type AssetShareCreateWithoutUserInput = {
    id?: string
    share_type: string
    share_token: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    asset: AssetCreateNestedOneWithoutSharesInput
    sharedBy: UserCreateNestedOneWithoutSharedAssetsInput
  }

  export type AssetShareUncheckedCreateWithoutUserInput = {
    id?: string
    asset_id: string
    shared_by: string
    share_type: string
    share_token: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareCreateOrConnectWithoutUserInput = {
    where: AssetShareWhereUniqueInput
    create: XOR<AssetShareCreateWithoutUserInput, AssetShareUncheckedCreateWithoutUserInput>
  }

  export type AssetShareCreateManyUserInputEnvelope = {
    data: AssetShareCreateManyUserInput | AssetShareCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutInvitedByInput, InvitationUncheckedUpdateWithoutInvitedByInput>
    create: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutInvitedByInput, InvitationUncheckedUpdateWithoutInvitedByInput>
  }

  export type InvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    role?: EnumInvitationRoleFilter<"Invitation"> | $Enums.InvitationRole
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    inviteBy?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
  }

  export type AssetUpsertWithWhereUniqueWithoutUploaderInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutUploaderInput, AssetUncheckedUpdateWithoutUploaderInput>
    create: XOR<AssetCreateWithoutUploaderInput, AssetUncheckedCreateWithoutUploaderInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutUploaderInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutUploaderInput, AssetUncheckedUpdateWithoutUploaderInput>
  }

  export type AssetUpdateManyWithWhereWithoutUploaderInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutUploaderInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    asset_id?: StringFilter<"Asset"> | string
    filename?: StringFilter<"Asset"> | string
    mime_type?: StringFilter<"Asset"> | string
    storage_path?: StringFilter<"Asset"> | string
    uploader_id?: StringFilter<"Asset"> | string
    group_id?: StringNullableFilter<"Asset"> | string | null
    size_bytes?: IntFilter<"Asset"> | number
    status?: EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus
    created_at?: DateTimeFilter<"Asset"> | Date | string
    updated_at?: DateTimeFilter<"Asset"> | Date | string
  }

  export type AssetShareUpsertWithWhereUniqueWithoutSharedByInput = {
    where: AssetShareWhereUniqueInput
    update: XOR<AssetShareUpdateWithoutSharedByInput, AssetShareUncheckedUpdateWithoutSharedByInput>
    create: XOR<AssetShareCreateWithoutSharedByInput, AssetShareUncheckedCreateWithoutSharedByInput>
  }

  export type AssetShareUpdateWithWhereUniqueWithoutSharedByInput = {
    where: AssetShareWhereUniqueInput
    data: XOR<AssetShareUpdateWithoutSharedByInput, AssetShareUncheckedUpdateWithoutSharedByInput>
  }

  export type AssetShareUpdateManyWithWhereWithoutSharedByInput = {
    where: AssetShareScalarWhereInput
    data: XOR<AssetShareUpdateManyMutationInput, AssetShareUncheckedUpdateManyWithoutSharedByInput>
  }

  export type AssetShareScalarWhereInput = {
    AND?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
    OR?: AssetShareScalarWhereInput[]
    NOT?: AssetShareScalarWhereInput | AssetShareScalarWhereInput[]
    id?: StringFilter<"AssetShare"> | string
    asset_id?: StringFilter<"AssetShare"> | string
    shared_by?: StringFilter<"AssetShare"> | string
    share_type?: StringFilter<"AssetShare"> | string
    share_token?: StringFilter<"AssetShare"> | string
    user_id?: StringNullableFilter<"AssetShare"> | string | null
    is_active?: BoolFilter<"AssetShare"> | boolean
    created_at?: DateTimeFilter<"AssetShare"> | Date | string
    updated_at?: DateTimeFilter<"AssetShare"> | Date | string
  }

  export type AssetShareUpsertWithWhereUniqueWithoutUserInput = {
    where: AssetShareWhereUniqueInput
    update: XOR<AssetShareUpdateWithoutUserInput, AssetShareUncheckedUpdateWithoutUserInput>
    create: XOR<AssetShareCreateWithoutUserInput, AssetShareUncheckedCreateWithoutUserInput>
  }

  export type AssetShareUpdateWithWhereUniqueWithoutUserInput = {
    where: AssetShareWhereUniqueInput
    data: XOR<AssetShareUpdateWithoutUserInput, AssetShareUncheckedUpdateWithoutUserInput>
  }

  export type AssetShareUpdateManyWithWhereWithoutUserInput = {
    where: AssetShareScalarWhereInput
    data: XOR<AssetShareUpdateManyMutationInput, AssetShareUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSentInvitesInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetCreateNestedManyWithoutUploaderInput
    sharedAssets?: AssetShareCreateNestedManyWithoutSharedByInput
    restrictedShares?: AssetShareCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentInvitesInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutUploaderInput
    sharedAssets?: AssetShareUncheckedCreateNestedManyWithoutSharedByInput
    restrictedShares?: AssetShareUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
  }

  export type UserUpsertWithoutSentInvitesInput = {
    update: XOR<UserUpdateWithoutSentInvitesInput, UserUncheckedUpdateWithoutSentInvitesInput>
    create: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInvitesInput, UserUncheckedUpdateWithoutSentInvitesInput>
  }

  export type UserUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUpdateManyWithoutUploaderNestedInput
    sharedAssets?: AssetShareUpdateManyWithoutSharedByNestedInput
    restrictedShares?: AssetShareUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutUploaderNestedInput
    sharedAssets?: AssetShareUncheckedUpdateManyWithoutSharedByNestedInput
    restrictedShares?: AssetShareUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAssetsInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationCreateNestedManyWithoutInvitedByInput
    sharedAssets?: AssetShareCreateNestedManyWithoutSharedByInput
    restrictedShares?: AssetShareCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssetsInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
    sharedAssets?: AssetShareUncheckedCreateNestedManyWithoutSharedByInput
    restrictedShares?: AssetShareUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
  }

  export type AssetMetadataCreateWithoutAssetInput = {
    metadata_id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetMetadataUncheckedCreateWithoutAssetInput = {
    metadata_id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetMetadataCreateOrConnectWithoutAssetInput = {
    where: AssetMetadataWhereUniqueInput
    create: XOR<AssetMetadataCreateWithoutAssetInput, AssetMetadataUncheckedCreateWithoutAssetInput>
  }

  export type AssetMetadataCreateManyAssetInputEnvelope = {
    data: AssetMetadataCreateManyAssetInput | AssetMetadataCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type TranscodingJobCreateWithoutAssetInput = {
    id?: string
    job_id: string
    worker_name?: string
    event_name?: string
    status?: $Enums.JobStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TranscodingJobUncheckedCreateWithoutAssetInput = {
    id?: string
    job_id: string
    worker_name?: string
    event_name?: string
    status?: $Enums.JobStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TranscodingJobCreateOrConnectWithoutAssetInput = {
    where: TranscodingJobWhereUniqueInput
    create: XOR<TranscodingJobCreateWithoutAssetInput, TranscodingJobUncheckedCreateWithoutAssetInput>
  }

  export type TranscodingJobCreateManyAssetInputEnvelope = {
    data: TranscodingJobCreateManyAssetInput | TranscodingJobCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type AssetShareCreateWithoutAssetInput = {
    id?: string
    share_type: string
    share_token: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sharedBy: UserCreateNestedOneWithoutSharedAssetsInput
    user?: UserCreateNestedOneWithoutRestrictedSharesInput
  }

  export type AssetShareUncheckedCreateWithoutAssetInput = {
    id?: string
    shared_by: string
    share_type: string
    share_token: string
    user_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareCreateOrConnectWithoutAssetInput = {
    where: AssetShareWhereUniqueInput
    create: XOR<AssetShareCreateWithoutAssetInput, AssetShareUncheckedCreateWithoutAssetInput>
  }

  export type AssetShareCreateManyAssetInputEnvelope = {
    data: AssetShareCreateManyAssetInput | AssetShareCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssetsInput = {
    update: XOR<UserUpdateWithoutAssetsInput, UserUncheckedUpdateWithoutAssetsInput>
    create: XOR<UserCreateWithoutAssetsInput, UserUncheckedCreateWithoutAssetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssetsInput, UserUncheckedUpdateWithoutAssetsInput>
  }

  export type UserUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUpdateManyWithoutInvitedByNestedInput
    sharedAssets?: AssetShareUpdateManyWithoutSharedByNestedInput
    restrictedShares?: AssetShareUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    sharedAssets?: AssetShareUncheckedUpdateManyWithoutSharedByNestedInput
    restrictedShares?: AssetShareUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetMetadataUpsertWithWhereUniqueWithoutAssetInput = {
    where: AssetMetadataWhereUniqueInput
    update: XOR<AssetMetadataUpdateWithoutAssetInput, AssetMetadataUncheckedUpdateWithoutAssetInput>
    create: XOR<AssetMetadataCreateWithoutAssetInput, AssetMetadataUncheckedCreateWithoutAssetInput>
  }

  export type AssetMetadataUpdateWithWhereUniqueWithoutAssetInput = {
    where: AssetMetadataWhereUniqueInput
    data: XOR<AssetMetadataUpdateWithoutAssetInput, AssetMetadataUncheckedUpdateWithoutAssetInput>
  }

  export type AssetMetadataUpdateManyWithWhereWithoutAssetInput = {
    where: AssetMetadataScalarWhereInput
    data: XOR<AssetMetadataUpdateManyMutationInput, AssetMetadataUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetMetadataScalarWhereInput = {
    AND?: AssetMetadataScalarWhereInput | AssetMetadataScalarWhereInput[]
    OR?: AssetMetadataScalarWhereInput[]
    NOT?: AssetMetadataScalarWhereInput | AssetMetadataScalarWhereInput[]
    metadata_id?: StringFilter<"AssetMetadata"> | string
    asset_id?: StringFilter<"AssetMetadata"> | string
    key?: StringFilter<"AssetMetadata"> | string
    value?: JsonFilter<"AssetMetadata">
    created_at?: DateTimeFilter<"AssetMetadata"> | Date | string
    updated_at?: DateTimeFilter<"AssetMetadata"> | Date | string
  }

  export type TranscodingJobUpsertWithWhereUniqueWithoutAssetInput = {
    where: TranscodingJobWhereUniqueInput
    update: XOR<TranscodingJobUpdateWithoutAssetInput, TranscodingJobUncheckedUpdateWithoutAssetInput>
    create: XOR<TranscodingJobCreateWithoutAssetInput, TranscodingJobUncheckedCreateWithoutAssetInput>
  }

  export type TranscodingJobUpdateWithWhereUniqueWithoutAssetInput = {
    where: TranscodingJobWhereUniqueInput
    data: XOR<TranscodingJobUpdateWithoutAssetInput, TranscodingJobUncheckedUpdateWithoutAssetInput>
  }

  export type TranscodingJobUpdateManyWithWhereWithoutAssetInput = {
    where: TranscodingJobScalarWhereInput
    data: XOR<TranscodingJobUpdateManyMutationInput, TranscodingJobUncheckedUpdateManyWithoutAssetInput>
  }

  export type TranscodingJobScalarWhereInput = {
    AND?: TranscodingJobScalarWhereInput | TranscodingJobScalarWhereInput[]
    OR?: TranscodingJobScalarWhereInput[]
    NOT?: TranscodingJobScalarWhereInput | TranscodingJobScalarWhereInput[]
    id?: StringFilter<"TranscodingJob"> | string
    asset_id?: StringFilter<"TranscodingJob"> | string
    job_id?: StringFilter<"TranscodingJob"> | string
    worker_name?: StringFilter<"TranscodingJob"> | string
    event_name?: StringFilter<"TranscodingJob"> | string
    status?: EnumJobStatusFilter<"TranscodingJob"> | $Enums.JobStatus
    created_at?: DateTimeFilter<"TranscodingJob"> | Date | string
    updated_at?: DateTimeFilter<"TranscodingJob"> | Date | string
  }

  export type AssetShareUpsertWithWhereUniqueWithoutAssetInput = {
    where: AssetShareWhereUniqueInput
    update: XOR<AssetShareUpdateWithoutAssetInput, AssetShareUncheckedUpdateWithoutAssetInput>
    create: XOR<AssetShareCreateWithoutAssetInput, AssetShareUncheckedCreateWithoutAssetInput>
  }

  export type AssetShareUpdateWithWhereUniqueWithoutAssetInput = {
    where: AssetShareWhereUniqueInput
    data: XOR<AssetShareUpdateWithoutAssetInput, AssetShareUncheckedUpdateWithoutAssetInput>
  }

  export type AssetShareUpdateManyWithWhereWithoutAssetInput = {
    where: AssetShareScalarWhereInput
    data: XOR<AssetShareUpdateManyMutationInput, AssetShareUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetCreateWithoutMetadataInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    uploader: UserCreateNestedOneWithoutAssetsInput
    transcodingJobs?: TranscodingJobCreateNestedManyWithoutAssetInput
    shares?: AssetShareCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutMetadataInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    uploader_id: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcodingJobs?: TranscodingJobUncheckedCreateNestedManyWithoutAssetInput
    shares?: AssetShareUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutMetadataInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutMetadataInput, AssetUncheckedCreateWithoutMetadataInput>
  }

  export type AssetUpsertWithoutMetadataInput = {
    update: XOR<AssetUpdateWithoutMetadataInput, AssetUncheckedUpdateWithoutMetadataInput>
    create: XOR<AssetCreateWithoutMetadataInput, AssetUncheckedCreateWithoutMetadataInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutMetadataInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutMetadataInput, AssetUncheckedUpdateWithoutMetadataInput>
  }

  export type AssetUpdateWithoutMetadataInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutAssetsNestedInput
    transcodingJobs?: TranscodingJobUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutMetadataInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcodingJobs?: TranscodingJobUncheckedUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutTranscodingJobsInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    uploader: UserCreateNestedOneWithoutAssetsInput
    metadata?: AssetMetadataCreateNestedManyWithoutAssetInput
    shares?: AssetShareCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutTranscodingJobsInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    uploader_id: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    metadata?: AssetMetadataUncheckedCreateNestedManyWithoutAssetInput
    shares?: AssetShareUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutTranscodingJobsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutTranscodingJobsInput, AssetUncheckedCreateWithoutTranscodingJobsInput>
  }

  export type AssetUpsertWithoutTranscodingJobsInput = {
    update: XOR<AssetUpdateWithoutTranscodingJobsInput, AssetUncheckedUpdateWithoutTranscodingJobsInput>
    create: XOR<AssetCreateWithoutTranscodingJobsInput, AssetUncheckedCreateWithoutTranscodingJobsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutTranscodingJobsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutTranscodingJobsInput, AssetUncheckedUpdateWithoutTranscodingJobsInput>
  }

  export type AssetUpdateWithoutTranscodingJobsInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutAssetsNestedInput
    metadata?: AssetMetadataUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutTranscodingJobsInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: AssetMetadataUncheckedUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateWithoutSharesInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    uploader: UserCreateNestedOneWithoutAssetsInput
    metadata?: AssetMetadataCreateNestedManyWithoutAssetInput
    transcodingJobs?: TranscodingJobCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutSharesInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    uploader_id: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
    metadata?: AssetMetadataUncheckedCreateNestedManyWithoutAssetInput
    transcodingJobs?: TranscodingJobUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutSharesInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutSharesInput, AssetUncheckedCreateWithoutSharesInput>
  }

  export type UserCreateWithoutSharedAssetsInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationCreateNestedManyWithoutInvitedByInput
    assets?: AssetCreateNestedManyWithoutUploaderInput
    restrictedShares?: AssetShareCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedAssetsInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
    assets?: AssetUncheckedCreateNestedManyWithoutUploaderInput
    restrictedShares?: AssetShareUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedAssetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedAssetsInput, UserUncheckedCreateWithoutSharedAssetsInput>
  }

  export type UserCreateWithoutRestrictedSharesInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationCreateNestedManyWithoutInvitedByInput
    assets?: AssetCreateNestedManyWithoutUploaderInput
    sharedAssets?: AssetShareCreateNestedManyWithoutSharedByInput
  }

  export type UserUncheckedCreateWithoutRestrictedSharesInput = {
    id?: string
    full_name: string
    email: string
    role: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentInvites?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
    assets?: AssetUncheckedCreateNestedManyWithoutUploaderInput
    sharedAssets?: AssetShareUncheckedCreateNestedManyWithoutSharedByInput
  }

  export type UserCreateOrConnectWithoutRestrictedSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestrictedSharesInput, UserUncheckedCreateWithoutRestrictedSharesInput>
  }

  export type AssetUpsertWithoutSharesInput = {
    update: XOR<AssetUpdateWithoutSharesInput, AssetUncheckedUpdateWithoutSharesInput>
    create: XOR<AssetCreateWithoutSharesInput, AssetUncheckedCreateWithoutSharesInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutSharesInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutSharesInput, AssetUncheckedUpdateWithoutSharesInput>
  }

  export type AssetUpdateWithoutSharesInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutAssetsNestedInput
    metadata?: AssetMetadataUpdateManyWithoutAssetNestedInput
    transcodingJobs?: TranscodingJobUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutSharesInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: AssetMetadataUncheckedUpdateManyWithoutAssetNestedInput
    transcodingJobs?: TranscodingJobUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type UserUpsertWithoutSharedAssetsInput = {
    update: XOR<UserUpdateWithoutSharedAssetsInput, UserUncheckedUpdateWithoutSharedAssetsInput>
    create: XOR<UserCreateWithoutSharedAssetsInput, UserUncheckedCreateWithoutSharedAssetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedAssetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedAssetsInput, UserUncheckedUpdateWithoutSharedAssetsInput>
  }

  export type UserUpdateWithoutSharedAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUpdateManyWithoutInvitedByNestedInput
    assets?: AssetUpdateManyWithoutUploaderNestedInput
    restrictedShares?: AssetShareUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    assets?: AssetUncheckedUpdateManyWithoutUploaderNestedInput
    restrictedShares?: AssetShareUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutRestrictedSharesInput = {
    update: XOR<UserUpdateWithoutRestrictedSharesInput, UserUncheckedUpdateWithoutRestrictedSharesInput>
    create: XOR<UserCreateWithoutRestrictedSharesInput, UserUncheckedCreateWithoutRestrictedSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRestrictedSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRestrictedSharesInput, UserUncheckedUpdateWithoutRestrictedSharesInput>
  }

  export type UserUpdateWithoutRestrictedSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUpdateManyWithoutInvitedByNestedInput
    assets?: AssetUpdateManyWithoutUploaderNestedInput
    sharedAssets?: AssetShareUpdateManyWithoutSharedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRestrictedSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentInvites?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
    assets?: AssetUncheckedUpdateManyWithoutUploaderNestedInput
    sharedAssets?: AssetShareUncheckedUpdateManyWithoutSharedByNestedInput
  }

  export type InvitationCreateManyInvitedByInput = {
    id?: string
    email: string
    role: $Enums.InvitationRole
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type AssetCreateManyUploaderInput = {
    asset_id?: string
    filename: string
    mime_type: string
    storage_path: string
    group_id?: string | null
    size_bytes: number
    status?: $Enums.AssetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareCreateManySharedByInput = {
    id?: string
    asset_id: string
    share_type: string
    share_token: string
    user_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareCreateManyUserInput = {
    id?: string
    asset_id: string
    shared_by: string
    share_type: string
    share_token: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvitationUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumInvitationRoleFieldUpdateOperationsInput | $Enums.InvitationRole
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetUpdateWithoutUploaderInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: AssetMetadataUpdateManyWithoutAssetNestedInput
    transcodingJobs?: TranscodingJobUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutUploaderInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: AssetMetadataUncheckedUpdateManyWithoutAssetNestedInput
    transcodingJobs?: TranscodingJobUncheckedUpdateManyWithoutAssetNestedInput
    shares?: AssetShareUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutUploaderInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    size_bytes?: IntFieldUpdateOperationsInput | number
    status?: EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutSharesNestedInput
    user?: UserUpdateOneWithoutRestrictedSharesNestedInput
  }

  export type AssetShareUncheckedUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUncheckedUpdateManyWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutSharesNestedInput
    sharedBy?: UserUpdateOneRequiredWithoutSharedAssetsNestedInput
  }

  export type AssetShareUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetMetadataCreateManyAssetInput = {
    metadata_id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TranscodingJobCreateManyAssetInput = {
    id?: string
    job_id: string
    worker_name?: string
    event_name?: string
    status?: $Enums.JobStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetShareCreateManyAssetInput = {
    id?: string
    shared_by: string
    share_type: string
    share_token: string
    user_id?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AssetMetadataUpdateWithoutAssetInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetMetadataUncheckedUpdateWithoutAssetInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetMetadataUncheckedUpdateManyWithoutAssetInput = {
    metadata_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscodingJobUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscodingJobUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscodingJobUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    worker_name?: StringFieldUpdateOperationsInput | string
    event_name?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedBy?: UserUpdateOneRequiredWithoutSharedAssetsNestedInput
    user?: UserUpdateOneWithoutRestrictedSharesNestedInput
  }

  export type AssetShareUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetShareUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    share_type?: StringFieldUpdateOperationsInput | string
    share_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}