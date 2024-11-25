import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../../application/redux/slices/itemsSlice';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemById, errorItemById } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [dispatch, id]);

  const { title, price, picture, condition, free_shipping, description } =
    itemById.item;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 15px',
          marginBottom: '20px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Back
      </button>
      <h1>{title}</h1>
      <img
        src={picture}
        alt={title}
        style={{
          maxWidth: '400px',
          maxHeight: '300px',
          marginBottom: '20px',
          display: 'block',
        }}
      />
      <p>
        <span>Price:</span> {price.currency} {price.amount.toLocaleString()}
      </p>
      <p>
        <span>Condition:</span> {condition === 'new' ? 'New' : 'Used'}
      </p>
      <p>
        <span>Free Shipping:</span> {free_shipping ? 'Yes' : 'No'}
      </p>
      <p>
        <span>Description:</span>
      </p>
      <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
    </div>
  );
};

export default ItemDetailPage;
