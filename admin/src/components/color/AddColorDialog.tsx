import React, { useContext, useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateNewColorMutation } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function AddColorDialog() {
  const { createSuccessToast } = useContext(GlobalContext);
  const [createNewColor] = useCreateNewColorMutation();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField: any = watch();

  const createColor = async () => {
    try {
      createNewColor(handleAllField);
      createSuccessToast()
      reset();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="end">
        <Button
          size="large"
          onClick={handleClickOpen}
          className="customCard px-4">
          Add New
        </Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}>
        <form
          onSubmit={handleSubmit(createColor)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Colors </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="name"
                className="form-label p_zero_first_cap mt-2 h6 ">
                Colors Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("name", { required: "Required field" })}
                placeholder="name"
              />
              {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
