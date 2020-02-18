import React from 'react';
import PropTypes from 'prop-types';

import AddNewHabitCard from './AddNewHabitCard';
import HabitCard from './HabitCard';
import WeekHeader from './WeekHeader';

const HabitList = ({habits}) => {
  const sortedHabits = habits.sort((a, b) => a.createdAt - b.createdAt);
  return (
    <div>
      <AddNewHabitCard />
      <WeekHeader />
      {sortedHabits.length > 0 ? (
        sortedHabits.map((habit) => <HabitCard key={habit.id} habit={habit} />)
      ) : (
        <div className="f6 tc black-50">You have no habits. Create one!</div>
      )}
    </div>
  );
};

HabitList.propTypes = {
  habits: PropTypes.array.isRequired,
};

export default HabitList;