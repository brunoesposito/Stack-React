import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const dishes = [
    {
        "image": "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg",
        "description": "This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        "image": "https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG",
        "description": "This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried."
    },
    {
        "image": "https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R",
        "description": "This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving."
    },
    {
        "image": "https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE",
        "description": "Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey."
    }
];


const INITIAL_STATE = {
    dishes,
    auth: false
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return { ...state, auth: true };
        case 'USER_LOGOUT':
            return { ...state, auth: false };
        default:
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
