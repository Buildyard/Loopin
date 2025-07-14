import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userAtom', // unique ID (with respect to other atoms/selectors)
  default: {
    name: 'Kshitiz',
    age: null,
    address: '',
  },
});

//==================|| How to use this atom in a component ||==================//
// import { useRecoilState } from 'recoil';
// import { userAtom } from './path/to/your/atom';
// const [user, setUser] = useRecoilState(userAtom);
// console.log(user.name); // Outputs: Kshitiz