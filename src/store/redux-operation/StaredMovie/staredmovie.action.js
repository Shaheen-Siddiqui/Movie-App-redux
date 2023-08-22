export const starActionType = {
  START_MOVIES: "START_MOVIES",
};

export const isStared=(array, id)=>{
  return array.find(item=>item.id==id)
}