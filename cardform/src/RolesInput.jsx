import React, { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from './components/ui/button';

const RolesInput = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'roles',
  });

  const [role, setRole] = useState('');

  const handleAddRole = () => {
    if (role.trim() !== '') {
      append({ value: role });
      setRole('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddRole();
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a role"
          className="text-black"
        />
        <button
          type="button"
          onClick={handleAddRole}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Add
        </button>
      </div>
      <div className="mt-2 flex flex-wrap space-x-2">
        {fields.map((field, index) => (
          <span key={field.id} className="badge">
            {field.value}
            <button type="button" onClick={() => remove(index)} className="text-red-500">
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default RolesInput;
