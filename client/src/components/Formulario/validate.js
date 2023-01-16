
export function validate (data) {
  let errors = {};
  if(!data.name) {
    errors.name = 'Name is required'
  }
  if(data.name && data.name.length > 30) {
    errors.name = 'Name must be 30 characters or less'
  }
  if(data.healthscore  && data.healthscore > 100) {
    errors.healthscore = 'Healthscore must be 100 or less'
  }
  if(data.healthscore  && data.healthscore < 0) {
    errors.healthscore = 'Healthscore must be 0 or more'
  }
  if(!data.summary ){
    errors.summary = 'Summary is required'
  }
  if(data.summary && data.summary.length > 400) {
    errors.summary = 'Summary must be 100 characters or less'
  }
  if(!data.typedietId){
    errors.typedietId = 'typedietId is required'
  }
  if(data.typedietId && data.typedietId.length > 3) {
    errors.typedietId = 'typedietId must be 3 characters or less'
  }
  if(!data.dishtypes){
    errors.dishtypes = 'dishtypes is required'
  }
  return errors;

}