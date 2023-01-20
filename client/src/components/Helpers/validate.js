
export function validate (data) {
  let errors = {};
  if(data.name.length <= 5) {
    errors.name = 'Name must be 5 characters or more'
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
  if(data.summary && data.summary.length < 50) {
    errors.summary = 'Summary must be 50 characters or more'
  }

  if(data.summary && data.summary.length > 1000) {
    errors.summary = 'Summary must be 100 characters or less'
  }
  return errors;

}