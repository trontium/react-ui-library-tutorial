// src/virtual-list/virtual-list.tsx
import React, { useState, useRef, useMemo, UIEvent, useEffect } from 'react';
import classNames from 'classnames';
import { VirtualListProps } from './interface';

export const VirtualList = <T extends any>(props: VirtualListProps<T>) => {
  const { height, itemHeight, data, itemKey, children, style, className, ...restProps } = props;
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalHeight = data.length * itemHeight;

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const { startIndex, endIndex, offsetTop } = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const visibleCount = Math.ceil(height / itemHeight);
    const endIndex = Math.min(data.length, startIndex + visibleCount + 5); // Buffer to prevent flickering
    const offsetTop = startIndex * itemHeight;
    return { startIndex, endIndex, offsetTop };
  }, [scrollTop, itemHeight, height, data.length]);

  const visibleData = data.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      role="list"
      style={{ height, overflowY: 'auto', ...style }}
      className={classNames('trontium-virtual-list', className)}
      onScroll={onScroll}
      {...restProps}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translate3d(0, ${offsetTop}px, 0)`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        >
          {visibleData.map((item, index) => {
            const actualIndex = startIndex + index;
            // The key is critical for React to reuse nodes correctly
            return (
              <div key={itemKey(item)} style={{ height: itemHeight }}>
                 {children(item, actualIndex)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualList;
