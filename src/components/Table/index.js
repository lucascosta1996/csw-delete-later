import React from 'react';
import styled from 'styled-components';

const TableStyled = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  margin-top: 30px;
`;

const Th = styled.th`
  background: rgba(0, 0, 0, 0.02);
  font-weight: normal;
  text-transform: uppercase;
  color: #232323;
  border: 1px solid #ebeff1;
  line-height: 1.4;
  padding: 10px;
  text-align: left;
`;

const Tr = styled.tr``;

const Td = styled.th`
  border: 1px solid #ebeff1;
  line-height: 1.4;
  padding: 10px;
  text-align: left;
  white-space: nowrap;
`;

const Caption = styled.caption`
  border: 1px solid #ebeff1;
  border-bottom: 0;
  line-height: 1.4;
  margin-top: 30px;
  padding: 20px 10px;
  text-align: left;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 300;
  color: #666;
`;

function Table(props) {
  const { rows, columns, caption } = props;

  const renderHead = columnsData => {
    return columnsData.reduce((acc, el, index, arr) => {
      acc.push(
        <Th key={`${el}-${index}`}>
          {el}
        </Th>
      );
      if (index === arr.length - 1) {
        return <Tr>{acc}</Tr>;
      }
      return acc;
    }, []);
  };

  const renderBody = rowsData => {
    return rowsData.reduce((acc, el, index, arr) => {
      const rowCells = Object.keys(el);
      const cells = rowCells.map((cell, index, arr) => (
        <Td key={`${el[cell]}-${index}`}>
          {el[cell]}
        </Td>
      ));
      acc.push(<Tr key={`${el}-${index}`}>{cells}</Tr>);
      return acc;
    }, []);
  };

  const renderCaption = caption =>
    caption ? (
      <Caption>
        <h2>
          {caption}
        </h2>
      </Caption>
    ) : null;

  return (
    <TableStyled>
      {renderCaption(caption)}
      <thead>{renderHead(columns)}</thead>
      <tbody>{renderBody(rows)}</tbody>
    </TableStyled>
  );
};

export default Table;