export default {
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
          name: 'Ram',
          age: 22,
          gender: 'male',
          spouse: undefined,
          parents: [],
          spouse: undefined,
        },
        {
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
