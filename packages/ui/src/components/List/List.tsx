import { createComponent, withNamespace } from '~/utils/component';
import type { PropsOf } from '~/utils/types';

import { Icon } from '../Icon/Icon';
import type { TextProps } from '../Text/Text';
import { Text } from '../Text/Text';

import { styles } from './styles';
import type { ListContext } from './useListContext';
import { ListProvider, useListContext } from './useListContext';

export type ListBaseProps = PropsOf<'ul'> & { type?: 'none' | 'ol' | 'ul' };
export type ListProps = ListContext & ListBaseProps;
export type ListULProps = Omit<ListProps, 'type'>;
export type ListOLProps = Omit<ListProps, 'type'>;
export type ListItemProps = PropsOf<'li'>;

export const ListRoot = createComponent<ListProps, 'ul'>({
  id: 'List',
  render: (
    _,
    {
      type = 'none',
      className,
      icon,
      iconColor,
      iconSize,
      iconAriaLabel,
      ...props
    },
  ) => {
    const El = type === 'ol' ? 'ol' : 'ul';
    const classes = styles.list({ type, withIcon: Boolean(icon), className });
    return (
      <ListProvider value={{ icon, iconColor, iconSize, iconAriaLabel }}>
        <El {...props} className={classes} />
      </ListProvider>
    );
  },
});

export const ListItem = createComponent<ListItemProps, 'li'>({
  id: 'ListItem',
  render: (_, { children, className, ...props }) => {
    const { icon, iconColor, iconSize, iconAriaLabel } = useListContext();
    const classes = styles.listItem({ withIcon: Boolean(icon), className });
    const iconEl = icon && (
      <Icon
        icon={icon}
        color={iconColor}
        size={iconSize}
        aria-label={iconAriaLabel}
      />
    );
    return (
      <Text as="li" {...(props as TextProps)} className={classes}>
        {iconEl} {children}
      </Text>
    );
  },
});

export const ListUL = createComponent<ListULProps, 'ul'>({
  id: 'ListUL',
  baseElement: ListRoot as any,
  defaultProps: {
    type: 'ul',
  } as ListProps,
});

export const ListOL = createComponent<ListOLProps, 'ol'>({
  id: 'ListOL',
  baseElement: ListRoot as any,
  defaultProps: {
    type: 'ol',
  } as ListProps,
});

export const List = withNamespace(ListRoot, {
  UL: ListUL,
  OL: ListOL,
  Item: ListItem,
});
