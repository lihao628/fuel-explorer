import { Box, HStack } from 'pn-ui-primitives/Box';
import { Copyable } from 'pn-ui-primitives/Copyable';
import { Text } from 'pn-ui-primitives/Text';
import type { BaseProps } from 'pn-ui-primitives/dist/utils/types';
import { useMemo } from 'react';
import { tv } from 'tailwind-variants';
import { shortAddress } from '~/systems/Core/utils/address';

import type { TxStatus, TxType } from '../../types';
import { TxIcon } from '../TxIcon/TxIcon';

const TITLE_MAP: Record<TxType, string> = {
  'contract-call': 'Contract Call',
  transfer: 'Transfer',
  mint: 'Mint',
  burn: 'Burn',
};

type TxTitleProps = BaseProps<{
  status: TxStatus;
  type: TxType;
  txHash: string;
}>;

export function TxTitle({ status, type, txHash, ...props }: TxTitleProps) {
  const title = useMemo(() => TITLE_MAP[type], [type]);
  const classes = styles();
  return (
    <HStack {...props}>
      <TxIcon type={type} status={status} />
      <Box>
        <Text as="p" size="3" className={classes.heading()}>
          {title}
        </Text>
        <Copyable value={txHash} className={classes.copyable()}>
          {shortAddress(txHash)}
        </Copyable>
      </Box>
    </HStack>
  );
}

const styles = tv({
  slots: {
    heading: 'm-0 leading-tight font-medium',
    copyable: 'text-sm text-secondary',
  },
});
