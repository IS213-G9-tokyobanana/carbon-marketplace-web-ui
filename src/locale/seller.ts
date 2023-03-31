/**
 * @prettier
 */
export default {
  controller: {
    search: {
      placeholder: 'Search',
    },
    newProject: 'New Project',
  },
  card: {
    label: {
      type: 'Project Type:',
      milestone: 'Milestones:',
    },
    addBtn: '+ Add Projects',
  },
  createForm: {
    projectDetails: {
      title: 'Project Details',
      addCoverPhoto: '+ Add Cover Photo',
      label: {
        title: 'Project Title',
        type: 'Project Type',
        offset: 'Total Target Offset',
      },
      placeholder: {
        title: 'Input Text',
        type: 'Select Project Type',
        offset: 'Tons of CO₂e',
      },
    },
    milestones: {
      title: 'Milestones',
      label: {
        name: 'Name',
        amt: 'Amount',
      },
      placeholder: {
        input: 'Input text',
        datepicker: 'Select date',
      },
      addBtn: '+ Add Milestone',
    },
    description: {
      title: 'Description',
      placeholder: 'Write text here...',
    },
    button: {
      cancel: 'Cancel',
      create: 'Create',
    },
  },
  previewEditForm: {
    label: {
      type: 'Type',
      totalOffset: 'Total Offset',
      milestones: 'Milestones',
      description: 'Description',
    },
    button: {
      cancel: 'Cancel',
      saveChanges: 'Save Changes',
    },
    milestones: {
      label: {
        name: 'Name',
        amt: 'Amount',
        dueDate: 'By',
      },
      placeholder: {
        name: 'Text',
        amt: 'tons of CO₂',
        dueDate: 'Pick a future date',
      },
      addBtn: '+ Add Milestone',
    },
    dueDatePrefix: 'By',
  },
};
