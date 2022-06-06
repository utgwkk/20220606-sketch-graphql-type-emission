export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bar = {
  barField: Scalars['String'];
};

export type Bar1 = Bar & {
  __typename?: 'Bar1';
  bar1Field: Scalars['String'];
  barField: Scalars['String'];
};

export type Bar2 = Bar & {
  __typename?: 'Bar2';
  bar2Field: Scalars['String'];
  barField: Scalars['String'];
};

export type Foo = Node & {
  __typename?: 'Foo';
  bar: Bar;
  id: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Foo_Foo_OkFragment = { __typename?: 'Foo', id: string, bar: { __typename: 'Bar1', barField: string, bar1Field: string } | { __typename: 'Bar2', barField: string, bar2Field: string } };

type Foo_Bar_Ok_Bar1_Fragment = { __typename: 'Bar1', barField: string, bar1Field: string };

type Foo_Bar_Ok_Bar2_Fragment = { __typename: 'Bar2', barField: string, bar2Field: string };

export type Foo_Bar_OkFragment = Foo_Bar_Ok_Bar1_Fragment | Foo_Bar_Ok_Bar2_Fragment;

type Foo_Bar_Ng_Bar1_Fragment = { __typename: 'Bar1', bar1Field: string, barField: string };

type Foo_Bar_Ng_Bar2_Fragment = { __typename: 'Bar2', bar2Field: string, barField: string };

export type Foo_Bar_NgFragment = Foo_Bar_Ng_Bar1_Fragment | Foo_Bar_Ng_Bar2_Fragment;

export type Foo_Foo_Ng1Fragment = { __typename?: 'Foo', id: string, bar: { __typename: 'Bar1', bar1Field: string, barField: string } | { __typename: 'Bar2', bar2Field: string, barField: string } };

export type Foo_Foo_Ng2Fragment = { __typename?: 'Foo', id: string, bar: { __typename: 'Bar1', bar1Field: string, barField: string } | { __typename: 'Bar2', bar2Field: string, barField: string } };
