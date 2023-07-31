import React from 'react';

export interface RefreshTextProps {
  refreshing?: boolean;
  loading?: boolean;
}

const RefreshText = ({ refreshing, loading }: RefreshTextProps) => <>{buildRefreshText({ loading, refreshing })}</>;
export default RefreshText;

export const buildRefreshText = ({ refreshing, loading }: RefreshTextProps) =>
  refreshing ? 'Refreshing...' : loading ? 'Loading...' : null;
