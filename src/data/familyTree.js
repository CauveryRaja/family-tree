export default {
  id: 'John Doe22',
  name: 'John Doe',
  age: 22,
  gender: 'male',
  spouse: {
    name: 'Mrs Doe',
    age: 22,
    gender: 'female',
    spouse: undefined,
    parents: [],
  },
  parents: [],
  children: [
    {
      id: 'Max32',
      name: 'Max',
      age: 32,
      gender: 'male',
      spouse: {
        name: 'Mrs Max',
        age: 22,
        gender: 'female',
        spouse: undefined,
        parents: [],
      },
      children: [
        {
          id: 'Ram22',
          name: 'Ram',
          age: 22,
          gender: 'male',
          spouse: undefined,
          parents: [],
          spouse: undefined,
        },
        {
          id: 'Rami22',
          name: 'Rami',
          age: 22,
          gender: 'female',
          spouse: undefined,
          parents: [],
          spouse: undefined,
        },
      ],
    },
    {
      id: 'Axul12',
      name: 'Axul',
      age: 12,
      gender: 'male',
      spouse: {
        name: 'Mrs Axul',
        age: 22,
        gender: 'female',
        spouse: undefined,
        parents: [],
      },
      // children: [
      //     {
      //         name: 'Ram',
      //         age: 22,
      //         gender: 'male',
      //         spouse: undefined,
      //         parents: []
      //     }
      // ]
    },
    {
      id: 'Anju12',
      name: 'Anju',
      age: 12,
      gender: 'female',
      spouse: undefined,
      // children: [
      //     {
      //         name: 'Ram',
      //         age: 22,
      //         gender: 'male',
      //         spouse: undefined,
      //         parents: []
      //     }
      // ]
    },
  ],
};
