import React from 'react';
import PauseIcon from './PauseIcon';
import PlayIcon from './PlayIcon';
import RefreshIcon from './RefreshIcon';
import RefreshText, { buildRefreshText } from './RefreshText';
import TooltipIconButton from './TooltipIconButton';

export interface RefreshIconButtonProps extends RefreshingComponentProps {
  includeRefreshText?: boolean;
}

// 5 minutes
const defaultAutoRefresh = 5 * 60 * 1000;

export interface RefreshingComponentProps {
  refreshing?: boolean;
  loading?: boolean;
  onRefresh?: () => void;
  autoRefresh?: boolean | number;
}

const RefreshIconButton = ({
  refreshing,
  loading,
  onRefresh,
  includeRefreshText,
  autoRefresh,
}: RefreshIconButtonProps) => {
  const refreshRate = autoRefresh === true ? defaultAutoRefresh : autoRefresh;

  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || !refreshRate || !onRefresh) {
      return;
    }

    const interval = setInterval(onRefresh, refreshRate);
    return () => clearInterval(interval);
  }, [refreshRate, onRefresh, paused]);

  const handleRefresh = (event) => {
    event.stopPropagation();

    if (refreshing || loading) {
      return;
    }

    onRefresh?.();
  };

  const handlePause = (event) => {
    event.stopPropagation();
    setPaused(true);
  };

  const handleResume = (event) => {
    event.stopPropagation();
    setPaused(false);
  };

  return (
    <>
      {includeRefreshText ? <RefreshText loading={loading} refreshing={refreshing} /> : null}
      {onRefresh ? (
        <>
          <TooltipIconButton
            title={buildRefreshText({ loading, refreshing }) || 'Refresh'}
            onClick={handleRefresh}
            disabled={refreshing || loading}
          >
            <RefreshIcon />
          </TooltipIconButton>
          {autoRefresh ? (
            paused ? (
              <TooltipIconButton title="Start refreshing" onClick={handleResume}>
                <PlayIcon />
              </TooltipIconButton>
            ) : (
              <TooltipIconButton title="Stop refreshing" onClick={handlePause}>
                <PauseIcon />
              </TooltipIconButton>
            )
          ) : null}
        </>
      ) : null}
    </>
  );
};
export default RefreshIconButton;
