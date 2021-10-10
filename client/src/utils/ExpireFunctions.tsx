export const expireFunction = (time) => {
    const today = new Date();
    switch(time) {
        case 'Today':
          const tomorrow = new Date(today)
          return tomorrow.setDate(tomorrow.getDate() + 1)
        case '4 hours':
            return today.setHours( today.getHours() + 4 );
        case '1 hour':
            return today.setHours( today.getHours() + 1 );
        case '30 minutes':
            return today.setHours( today.getMinutes() + 30 );
        default:
            return 0
      };
};