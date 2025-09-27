import Card from "./Card";
import { toast } from "react-toastify";

const TicketContainer = ({ ticketData, handelCardClick }) => {
  //console.log(ticketData);
  const filteredData = ticketData.filter((tic) => tic.status !== "Resolved");
  //console.log(filteredData);
  return (
    <>
      {filteredData.length == 0 ? (
        (toast("All ticket are resolved"),
        (
          <h1 className="pt-10 pb-5 text-2xl font-bold text-center text-gray-500">
            All ticket are resolved
          </h1>
        ))
      ) : (
        <div className="md:grid grid-cols-2">
          {filteredData.map((ticket) => (
            <Card
              handelCardClick={handelCardClick}
              key={ticket.id}
              ticket={ticket}
            ></Card>
          ))}
        </div>
      )}
    </>
  );
};

export default TicketContainer;
