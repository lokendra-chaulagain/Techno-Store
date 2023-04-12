import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddCategoryDialog() {
  const [createCategory] = useCreateCategoryMutation();

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
  const allFields = watch();

  // const handleCreateCategory = async (handleAllField: any) => {
  //   try {
  //     createCategory(handleAllField);
  //     handleClose();
  //     reset();
  //     toast.success("Create success");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const [images, setImages] = useState([]);

  const handleCreateCategory = async (e: any) => {
    const formData = new FormData();
    formData.append("name", allFields.name);
    if (images) {
      for (let i = 0; i < allFields.images.length; i++) {
        formData.append("images", allFields.images[i]);
      }
    }

    try {
      const response = await axios.post("http://localhost:12002/api/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // createCategory(formData);

      // setImages(response.data.urls);
      reset();
    } catch (error) {
      console.error(error);
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
          onSubmit={handleSubmit(handleCreateCategory)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Category </h4>
          <p className="customPrimaryTxtColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur enim incidunt omnis ducimus error similique provident, libero nobis perspiciatis?</p>

          <div className="row mb-3 ">
            <label
              htmlFor="name"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Category Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("name", { required: "Required field" })}
              placeholder="Category Name"
            />
            {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
          </div>

          <div className="row mb-3 ">
            <label
              htmlFor="images"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Images
            </label>
            <input
              type="file"
              multiple
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("images", { required: "Required field" })}
              placeholder="Images"
            />
            {errors.images && <p className="form_hook_error">{`${errors.images.message}`}</p>}
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
