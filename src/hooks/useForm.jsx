import { useState } from 'react';

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const resetForm = () => {
    setForm(initialValue);
  };

  const handleForm = (e, isMantine = false, input = '') => {
    let formUpdated;
    if (isMantine) {
      formUpdated = {
        ...form,
        [input]: e,
      };
    } else {
      const { name, value } = e.target;
      formUpdated = {
        ...form,
        [name]: value,
      };
    }
    setForm(formUpdated);
  };

  return { form, handleForm, resetForm };
};

export default useForm;