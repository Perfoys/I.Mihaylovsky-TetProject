import Column from './Column';

const MembersTable = () => {
  return (
        <div>
            <Column title="To do"></Column>
            <Column title="In Progress"></Column>
            <Column title="In Review"></Column>
            <Column title="Done"></Column>
        </div>
  );
};

export default MembersTable;
