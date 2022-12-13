import React from "react";
import styles from "styled-components";
import { useForm } from "react-hook-form";

function sturc() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <MainCont>
      <h3>ENQUIRY FORM</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Full name*"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          {...register("number", { required: true })}
          placeholder="Contact Number*"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          {...register("email", { required: true })}
          placeholder="Email Id*"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="selectionCont">
          <select {...register("class")}>
            <option value="">class</option>
          </select>
          <select {...register("type")}>
            <option value="cbse">CBSE</option>
          </select>
          <select {...register("cate")}>
            <option value="Co-ed">Co-ed</option>
          </select>
        </div>
        <input className="submit" type="submit" />
      </form>
    </MainCont>
  );
}

export default sturc;

const MainCont = styles.div`
padding: 18px 0px;
width: fit-content;
    border: 1px solid white;
    border-radius: 13px;
    width:100%;
    overflow:hidden;
    position:relative;
  
    h3{
      color: black;
      z-index:9;
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 25px;
      justify-content:center;
      z-index:9;
      width:85%;
      margin:auto;
    }
    input, select{
      background: white;
      border: none;
      padding: 8px 12px;
      border-radius: 7px;
      width: calc(100% - 30px);
      color: gray;
      aspect-ratio: 13/1;
    }
    .selectionCont{
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    select{
      width:30%;

    }
    .submit{
      margin:auto;
      background:#29AEF9;
      border-radius: 20px;
color:white;
border: 1px solid;
width: 45%;
min-width:200px;
margin-top:30px;
border: 2px solid linear-gradient(96.64deg, #FFFFFF -15.79%, rgba(0, 0, 0, 0) 359.39%);
}
`;
