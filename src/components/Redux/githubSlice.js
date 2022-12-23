import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState ={
  loading: false,
  data:[],
  error:'',
}

export const fetchData =createAsyncThunk('get/getAllData',
  async (thunkAPI) => {
    const res = await fetch('https://api.github.com/users/Samilcd26/repos').then(
    (data) => data.json()
  )
  return res
})


const gitDataSlice =createSlice({
  name: 'gitDatas',
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchData.pending,(state)=>{
      state.loading = true
      
    })
    builder.addCase(fetchData.fulfilled,(state,{payload})=>{
      state.loading=false
      state.data=payload
      state.error = ''
      
      
  })
  builder.addCase(fetchData.rejected,(state,actions)=>{
    state.loading=false
    state.data=[]
    state.error = actions.error.message
})}
})

export default gitDataSlice.reducer