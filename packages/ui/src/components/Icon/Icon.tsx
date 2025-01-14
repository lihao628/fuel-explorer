import { createComponent } from '../../utils/component';
import { cx } from '../../utils/css';
import type { PropsOf } from '../../utils/types';

import type { IconComponent, IconContext } from './useIconContext';
import { useIconContext } from './useIconContext';

type SvgIconProps = Omit<PropsOf<'svg'>, 'size' | 'stroke'>;
export type IconBaseProps = Partial<IconContext> & { icon: IconComponent };
export type IconProps = IconBaseProps & SvgIconProps;

export const Icon = createComponent<IconProps, 'svg'>({
  id: 'Icon',
  baseElement: 'svg',
  render: (
    _,
    {
      className,
      color: initColor,
      size: initSize,
      stroke: initStroke,
      icon: IconComponent,
      ...props
    },
  ) => {
    const iconContext = useIconContext();
    const size = initSize || iconContext.size;
    const stroke = initStroke || iconContext.stroke;
    const color = initColor || iconContext.color;
    const itemProps = { ...props, size, stroke };
    const classes = cx(color, 'inline-flex items-center', className);
    return <IconComponent {...itemProps} className={classes} />;
  },
});
