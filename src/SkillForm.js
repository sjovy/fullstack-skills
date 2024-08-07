import React from 'react';
import { useForm } from 'react-hook-form';

const SkillForm = ({ addSkill }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addSkill(data.skill);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Skill Title"
          {...register('skill', { required: true })}
        />
        <button className="btn btn-success" type="submit">+</button>
      </div>
    </form>
  );
};

export default SkillForm;