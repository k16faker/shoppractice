import ItemsForm from "../components/forms/ItemsForm";

const DUMMY_ITEM = [
    {
        name: 'Item 1',
        description: 'Description 1',
        image:"https://picsum.photos/200/300",
        price: 10
    },
    {
        name: 'Item 2',
        description: 'Description 2',
        image:"https://picsum.photos/200/300",
        price: 20
    },
    {
        name: 'Item 3',
        description: 'Description 3',
        image:"https://picsum.photos/200/300",
        price: 30
    }
];


function ItemsPage():JSX.Element {

    return (
        <div>
            <ItemsForm items={DUMMY_ITEM} />
        </div>
    );
};

export default ItemsPage;