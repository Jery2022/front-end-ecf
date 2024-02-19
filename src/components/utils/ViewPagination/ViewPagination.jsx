import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';

let active = 1;
let items = [];
for (let number = 1; number <= 8; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const DivPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px #000000;
`;

function ViewPagination() {
  return (
    <>
      <DivPagination>
        <br />
        <Pagination>{items}</Pagination>
        <br />
      </DivPagination>
    </>
  );
}

export default ViewPagination;
