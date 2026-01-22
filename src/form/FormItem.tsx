import type { FC } from 'react';
import React from 'react';

import classNames from 'classnames';

import type { FormItemProps } from './interface';

const FormItem: FC<FormItemProps> = ({ className, style, label, children }) => {
  const prefixCls = 'trontium-form-item';
  return (
    <div className={classNames(prefixCls, className)} style={style}>
      {label && <div className={`${prefixCls}-label`}>{label}</div>}
      <div className={`${prefixCls}-control`}>{children}</div>
    </div>
  );
};

export default FormItem;
