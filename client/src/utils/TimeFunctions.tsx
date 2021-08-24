// Function that gets a series of users within a range
export const generateArrayOfYears = () => {
    const max = new Date().getFullYear() - 3
    const min = max - 150
    const years:any = []
  
    for (let i:number = max; i >= min; i--) {
      years.push(i)
    }
    return years
  };

// Variables that define the date values I need in forms
export const days = Array.from({length: 31}, (_, index) => index + 1);
export const months = Array.from({length: 12}, (item, i) => {
    return new Date(0, i).toLocaleString('en-US', {month: 'long'})
  });
export const years = generateArrayOfYears();