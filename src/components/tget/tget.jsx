import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const MyTest = async () => {
    let result = await getCategoriesAndDocuments();
    let x = result[1]["title"];
    console.log("result is", x)
    return <div>hello world</div>;
};



