import React, { useState } from 'react';
import styles from '.styles/GroupCreation.module.css';

interface GroupCreationProps {
  onCreateGroup: (group: any) => void;
}

export function GroupCreation({ onCreateGroup }: GroupCreationProps) {
  const [formData, setFormData] = useState({
    name: '',
    isPrivate: false,
    imageFile: null as File | null,
    imagePreview: ''
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        imageFile: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateGroup({
      id: Date.now(),
      name: formData.name,
      isPrivate: formData.isPrivate,
      imageUrl: formData.imagePreview || 'https://via.placeholder.com/150',
      members: 1
    });
    setFormData({
      name: '',
      isPrivate: false,
      imageFile: null,
      imagePreview: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crear Nuevo Grupo</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Image Upload */}
        <div className={styles.imageUploadContainer}>
          {formData.imagePreview ? (
            <div className={styles.imagePreviewContainer}>
              <img
                src={formData.imagePreview}
                alt="Preview"
                className={styles.imagePreview}
              />
              <button
                type="button"
                onClick={() => setFormData({ ...formData, imageFile: null, imagePreview: '' })}
                className={styles.removeImageButton}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <div className={styles.uploadPlaceholder}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.uploadIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <label className={styles.uploadLabel}>
                <span className={styles.uploadText}>Subir imagen del grupo</span>
                <input
                  type="file"
                  className={styles.hiddenInput}
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
        </div>

        {/* Group Name */}
        <div>
          <label className={styles.inputContainer}>
            Nombre del Grupo
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.textInput}
            required
          />
        </div>

        {/* Privacy Toggle */}
        <div className={styles.privacyContainer}>
          <div>
            <h3 className={styles.privacyInfo}>Privacidad del Grupo</h3>
            <p className={styles.privacyDescription}>
              {formData.isPrivate ? 'Solo miembros invitados pueden unirse' : 'Cualquiera puede unirse'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, isPrivate: !formData.isPrivate })}
            className={`${styles.toggleButton} ${formData.isPrivate ? styles.toggleButtonActive : styles.toggleButtonInactive}`}
          >
            <span
              className={`${styles.toggleSlider} ${formData.isPrivate ? styles.toggleSliderActive : styles.toggleSliderInactive}`}
            />
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={styles.submitButton}
        >
          Crear Grupo
        </button>
      </form>
    </div>
  );
}