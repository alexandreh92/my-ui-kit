import { Children, isValidElement, ReactNode, cloneElement } from 'react';

import hasComplexChildren from './hasComplexChildren';

type DeepMapType = (
  children: ReactNode,
  deepMapFn: (
    child: ReactNode,
    index?: number,
    innerChildren?: readonly ReactNode[]
  ) => ReactNode
) => ReactNode[];

const deepMap: DeepMapType = (children, deepMapFn) =>
  Children.toArray(children).map(
    (child: ReactNode, index: number, mapChildren: readonly ReactNode[]) => {
      if (isValidElement(child) && hasComplexChildren(child)) {
        // Clone the child that has children and map them too
        return deepMapFn(
          cloneElement(child, {
            ...child.props,
            children: deepMap(child.props.children, deepMapFn),
          })
        );
      }
      return deepMapFn(child, index, mapChildren);
    }
  );

export default deepMap;
