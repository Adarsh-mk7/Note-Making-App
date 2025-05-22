import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/cards/NoteCard";
import { MdAdd, MdOutlineAlarmAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="meeting on 7:30"
            date="3rd april"
            content="MEeeing on 7th april on evening at a restaurant"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-amber-500 absolute right-10 bottom-10"
        onClick={() => {}}
      >
        <MdAdd className="text-[55px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestclose={() => {}}
        style={{
          overlay: {
            backgroundcolor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className=""
      >
        <AddEditNotes />
      </Modal>
    </>
  );
};

export default Home;
