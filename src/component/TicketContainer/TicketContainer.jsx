import Card from "./Card";

const TicketContainer = ({ ticketData, handelCardClick }) => {
  //console.log(ticketData);
  const filteredData = ticketData.filter((tic) => tic.status !== "Resolved");
  //console.log(filteredData);
  return (
    <div className="md:grid grid-cols-2">
      {filteredData.map((ticket) => (
        <Card
          handelCardClick={handelCardClick}
          key={ticket.id}
          ticket={ticket}
        ></Card>
      ))}
    </div>
  );
};

export default TicketContainer;
