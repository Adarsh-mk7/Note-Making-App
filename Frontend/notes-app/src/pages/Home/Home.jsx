import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import React, { useState } from "react";

// Optional: can be placed in App.jsx or index.jsx
Modal.setAppElement("#root");

function Home() {
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
            title="Meeting at 7:30"
            date="3rd April"
            content="Meeting on 7th April in the evening at a restaurant."
            tags={["#meeting"]}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-amber-500 fixed right-10 bottom-10 z-50"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[55px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() =>
          setOpenAddEditModal({ isShown: false, type: "add", data: null })
        }
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add/Edit Note"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onclose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
}

export default Home;
