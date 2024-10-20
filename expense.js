const expenseSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    splitMethod: { type: String, required: true }, 
    participants: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' }, amountOwed: Number }]
});
const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
