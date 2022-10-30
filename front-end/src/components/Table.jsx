import React from 'react';

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitario</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Cerveja Stella 250ml</td>
          <td>3</td>
          <td>R$ 3,50</td>
          <td>R$ 10,50</td>
        </tr>
      </tbody>
    </table>
  );
}
