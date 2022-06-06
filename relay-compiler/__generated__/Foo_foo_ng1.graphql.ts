/**
 * @generated SignedSource<<74958ce0436b224cebdf81513c898e8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Foo_foo_ng1$data = {
  readonly id: string;
  readonly bar: {
    readonly barField: string;
    readonly __typename: string;
    readonly bar1Field?: string;
    readonly bar2Field?: string;
  };
  readonly " $fragmentType": "Foo_foo_ng1";
};
export type Foo_foo_ng1$key = {
  readonly " $data"?: Foo_foo_ng1$data;
  readonly " $fragmentSpreads": FragmentRefs<"Foo_foo_ng1">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Foo_foo_ng1",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "bar",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "barField",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "bar1Field",
              "storageKey": null
            }
          ],
          "type": "Bar1",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "bar2Field",
              "storageKey": null
            }
          ],
          "type": "Bar2",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Foo",
  "abstractKey": null
};

(node as any).hash = "b0d300994d546c8cb12ff4dc308947fb";

export default node;
