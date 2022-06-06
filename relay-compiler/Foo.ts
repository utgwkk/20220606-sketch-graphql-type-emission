import { graphql } from "react-relay";

const fooOkFragment = graphql`
  fragment Foo_foo_ok on Foo {
    id
    bar {
      ... on Bar1 {
        __typename
        barField
        bar1Field
      }
      ... on Bar2 {
        __typename
        barField
        bar2Field
      }
    }
  }
`;

const barOkFragment = graphql`
  fragment Foo_bar_ok on Bar {
    ... on Bar1 {
      __typename
      barField
      bar1Field
    }
    ... on Bar2 {
      __typename
      barField
      bar2Field
    }
  }
`;

const barNgFragment = graphql`
  fragment Foo_bar_ng on Bar {
    barField
    ... on Bar1 {
      __typename
      bar1Field
    }
    ... on Bar2 {
      __typename
      bar2Field
    }
  }
`;
const fooNgFragment1 = graphql`
  fragment Foo_foo_ng1 on Foo {
    id
    bar {
      barField
      __typename
      ... on Bar1 {
        bar1Field
      }
      ... on Bar2 {
        bar2Field
      }
    }
  }
`;

const fooNgFragment2 = graphql`
  fragment Foo_foo_ng2 on Foo {
    id
    bar {
      barField
      ... on Bar1 {
        __typename
        bar1Field
      }
      ... on Bar2 {
        __typename
        bar2Field
      }
    }
  }
`;
