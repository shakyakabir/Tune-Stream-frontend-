import React, { useState } from "react";
import Input from "../ui/Input";
import "./CreatePlaylistModal.scss";
import Button from "../ui/Button";
import { v4 as uuidv4 } from "uuid";

interface CreatePlaylistModalProps {
  onClose?: () => void;
  onCreate?: (playlist: {
    id?: string;
    name: string;
    description: string;
  }) => void | undefined;
}

const CreatePlaylistModal: React.FC<CreatePlaylistModalProps> = ({
  onCreate,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    onCreate?.({
      id: uuidv4(),
      name,
      description,
    });
    onClose?.();
  };
  return (
    <div className="CreatePlaylist">
      <div className="CreatePlaylist-header">
        <div className="CreatePlaylist-header-left">
          <h2>New PlayList</h2>
        </div>
        <div className="CreatePlaylist-header-right" onClick={onClose}>
          X
        </div>
      </div>
      <div className="CreatePlaylist-inputs">
        <label htmlFor="">PlayList Name</label>
        <Input
          type="text"
          placeholder="Enter playlist name"
          name={""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label htmlFor="">Decription</label>
        <Input
          type="text"
          placeholder="Add an optional description..."
          name={""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
      </div>
      <div className="CreatePlaylist-buttons">
        <Button
          varient={"active"}
          text="Cancel"
          onClick={onClose}
          type={"button"}
        />
        <Button
          varient={"gradient"}
          text="Create Playlist"
          onClick={handleSubmit}
          type={"button"}
        />
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
