import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalContext";
import { useCreateProductMutation, useGetCategoriesQuery, useGetColorsQuery, useGetSizesQuery } from "../../redux/api/globalApi";
import { useRouter } from "next/router";

export default function EditProductTable() {
  const router = useRouter();
  const { createSuccessToast } = useContext(GlobalContext);
  const { data: categories } = useGetCategoriesQuery();
  const [createProduct] = useCreateProductMutation();
  const { data: colors } = useGetColorsQuery();
  const { data: sizes } = useGetSizesQuery();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField: any = watch();

  const createHandler = async () => {
    try {
      createProduct(handleAllField);
      reset();
      createSuccessToast();
      router.push("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(createHandler)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col-6 ">
              <label
                htmlFor="name"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("name", { required: "name is required" })}
                placeholder="name"
              />
              {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="description"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Description
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("description", { required: "description is required" })}
                placeholder="description"
              />
              {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
            </div>

            <div className="col-6 ">
              <label
                htmlFor="category"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Category
              </label>

              <select
                {...register("category", { required: "category is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                aria-label="Select category">
                <option
                  selected
                  value={"Null"}>
                  Select Category
                </option>
                {categories &&
                  categories.map((category, index) => (
                    <option
                      key={index}
                      value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
              {errors.category && <p className="form_hook_error">{`${errors.category.message}`}</p>}
            </div>

            <div className="col-6 ">
              <label
                htmlFor="priceNow"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Price Now
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("priceNow", { required: "Price Now is required" })}
                placeholder="Price Now"
              />
              {errors.priceNow && <p className="form_hook_error">{`${errors.priceNow.message}`}</p>}
            </div>

            <div className="col-6 ">
              <label
                htmlFor="pricePrevious"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Price Previous
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("pricePrevious", { required: "Price Previous is required" })}
                placeholder="Price Previous"
              />
              {errors.pricePrevious && <p className="form_hook_error">{`${errors.pricePrevious.message}`}</p>}
            </div>

            <div className="col-6 ">
              <label
                htmlFor="image"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Image
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("image", { required: "Image Previous is required" })}
                placeholder="Image"
              />
              {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="isActive"
                className="form-label px-0 mt-2 h6 ">
                isActive
              </label>

              <select
                {...register("isActive", { required: "isActive is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.isActive && <p className="form_hook_error">{`${errors.isActive.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="isBestSeller"
                className="form-label px-0 mt-2 h6 ">
                isBestSeller
              </label>

              <select
                {...register("isBestSeller", { required: "isBestSeller is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.isBestSeller && <p className="form_hook_error">{`${errors.isBestSeller.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="isFeatured"
                className="form-label px-0 mt-2 h6 ">
                isFeatured
              </label>

              <select
                {...register("isFeatured", { required: "isFeatured is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.isFeatured && <p className="form_hook_error">{`${errors.isFeatured.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="isHotSale"
                className="form-label px-0 mt-2 h6 ">
                isHotSale
              </label>

              <select
                {...register("isHotSale", { required: "isHotSale is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.isHotSale && <p className="form_hook_error">{`${errors.isHotSale.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="isRecent"
                className="form-label px-0 mt-2 h6 ">
                isRecent
              </label>

              <select
                {...register("isRecent", { required: "isRecent is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.isRecent && <p className="form_hook_error">{`${errors.isRecent.message}`}</p>}
            </div>

            <div className="col-6">
              <label
                htmlFor="isOutOfStock"
                className="form-label px-0 mt-2 h6 ">
                isOutOfStock
              </label>

              <select
                {...register("isOutOfStock", { required: "isOutOfStock is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.isOutOfStock && <p className="form_hook_error">{`${errors.isOutOfStock.message}`}</p>}
            </div>
          </div>

          {/* <div className="col-6 ">
            <label
              htmlFor="color"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Color
            </label>
            <div className="choose_size_product_wrapper">
              {colors &&
                colors.map((color, index) => (
                  <div
                    key={index}
                    className="form-check form-check-inline ">
                    <input
                      {...register("color", { required: "Color is required" })}
                      className="form-check-input"
                      type="checkbox"
                      id="colorCheckBox"
                      value={color.name}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="colorCheckBox">
                      {" "}
                      {color.name}
                    </label>
                  </div>
                ))}
            </div>
            {errors.color && <p className="form_hook_error">{`${errors.color.message}`}</p>}
          </div> */}

          {/* <div className="col-6">
            <label
              htmlFor="size"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Size
            </label>

            <div className="choose_size_product_wrapper">
              {sizes &&
                sizes.map((size, index) => (
                  <div className="form-check form-check-inline ">
                    <input
                      {...register("size", { required: "size is required" })}
                      className="form-check-input"
                      type="checkbox"
                      id="sizeCheckBox"
                      value={size.name}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sizeCheckBox">
                      {" "}
                      {size.name}
                    </label>
                  </div>
                ))}
            </div>

            {errors.size && <p className="form_hook_error">{`${errors.size.message}`}</p>}
          </div> */}

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
