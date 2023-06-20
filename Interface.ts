//interface is same as type alias
interface men {
  name: string;
  age: number;
}
const menDetails: men = {
  name: "mudassir",
  age: 12,
};
console.log(menDetails);
//interface method
interface skills {
  readonly name: string;
  skill?: () => string;
}
const mySkills: skills = {
  name: "ali",
  age: 12,
  skill: () => {
    return "web";
  },
};

// we can reopen interface
interface skills {
  age: number;
}

// extend interface
interface work extends skills {
  email: string;
}

const myWork: work = {
  name: "ahmad",
  age: 13,
  email: "mudassir@gmail.com",
  skill: () => "web",
};
// interface multiple inheritance

interface developer extends skills, work {
  password: number | string;
}

const Developer: developer = {
  name: "",
  age: 12,
  email: "",
  password: "dhs",
};

//interface is only in object
//we can reopen interface
// we use extends keyword
//in  type we use intersection