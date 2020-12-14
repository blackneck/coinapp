import React, { useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import numeral from 'numeral';

import trophyIcon from 'assets/icons/icon.svg';
import { GET_PRICE_IN_EURO } from 'api/Queries';
import { CryptoCurrensiesListItemProps } from './types';
import './styles.scss';

const CryptocurrenciesListItem = ({
  label,
  onDelete,
}: CryptoCurrensiesListItemProps) => {
  const { data, loading } = useQuery(GET_PRICE_IN_EURO, {
    variables: { baseSymbol: label },
  });

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
      event.preventDefault();
      onDelete(label);
    },
    [onDelete, label]
  );

  const formattedPrice = useMemo(
    () =>
      data && data.markets?.length > 0
        ? numeral(data.markets[0].ticker.lastPrice).format('0[.]00')
        : 0,
    [data]
  );

  return (
    <div className="list-item-container">
      <img alt="" src={trophyIcon} />
      <div className="labels-container">
        <p className="label">{label}</p>
        {!loading && data ? (
          <p className="price">
            {formattedPrice} <span>&#8364;</span>
          </p>
        ) : (
          <p className="price">
            <i>loading...</i>
          </p>
        )}
      </div>
      <span className="delte-button" onClick={handleClick}>
        &#10005;
      </span>
    </div>
  );
};
export default CryptocurrenciesListItem;
