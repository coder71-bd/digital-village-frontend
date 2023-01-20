import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fetch products from database
export const fetchAllProducts = createAsyncThunk(
  'e-market',
  async (pagination) => {
    console.log(pagination.role);
    const response = await axios
      .get(
        `/eMarket/Products/?page=${pagination.currPage}&size=${
          pagination.size
        }&search=${pagination.search}&roles=${JSON.stringify([2000])}`
      )
      .then((response) => response.data);
    console.log(
      `/eMarket/Products/?page=${pagination.currPage}&size=${
        pagination.size
      }&search=${pagination.search}&roles=${JSON.stringify([2000])}`
    );

    return {
      products: response.products,
      count: response.count,
      pageCount: pagination.pageCount,
      size: pagination.size,
      search: pagination.search,
    };
  }
);
// fetch  medicines
export const fetchAllMedicines = createAsyncThunk('getMedicines', async () => {
  const responce = await axios
    .get('/emarket/medicines')
    .then((res) => res.data);
  return responce;
});
// fetch all Products for admin
export const fetchAdminProducts = createAsyncThunk('getadmindata', async () => {
  const response = await axios.get('/emarket/admin').then((res) => res.data);
  return response;
});

// Add a Product
export const addProduct = createAsyncThunk('addProduct', async (data) => {
  const response = await axios
    .post('/emarket/products', data)
    .then((response) => response.data);
  return response;
});

// delete a product
export const deleteAProduct = createAsyncThunk('deleteProduct', async (id) => {
  await axios.delete(`/emarket/delete/${id}`);
  return id;
});

// Update a Product
export const updateAProduct = createAsyncThunk(
  'updateProduct',
  async (data) => {
    await axios.put(`/emarket/update/${data._id}`, data);
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    medicines: [],
    pageCount: 0,
    currPage: 0,
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setProductCurrPage: (state, { payload }) => {
      state.currPage = payload;
    },
  },
  extraReducers: (builder) => {
    // get all data
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.products = payload.products;
      const count = payload.count;
      const pageNumber = Math.ceil(count / payload.size);
      if (payload.search) {
        state.currPage = 0;
      }
      state.pageCount = pageNumber;
    });
    // get Admin Products
    builder.addCase(fetchAdminProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    // get all Medicines
    builder.addCase(fetchAllMedicines.fulfilled, (state, { payload }) => {
      state.medicines = payload;
    });
    // Add a product
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.products.push(payload[0]);
    });
    // delete
    builder.addCase(deleteAProduct.fulfilled, (state, { payload }) => {
      state.products = state.products.filter((cause) => cause._id !== payload);
    });
    // update a product
    builder.addCase(updateAProduct.fulfilled, (state, { payload }) => {
      const prevProduct = state.products.find(
        (product) => product._id === payload._id
      );
      const updateProducts = { ...prevProduct, ...payload };
      const afterRemove = state.products.filter(
        (cause) => cause._id !== payload._id
      );
      state.products = [...afterRemove, updateProducts];
    });
  },
});

export const { setProducts, setProductCurrPage } = productSlice.actions;

export default productSlice.reducer;
