class InstructionsController < ApplicationController
  before_action :set_instruction, only: [:show, :update, :destroy]

  # GET /instructions
  def index
    @instructions = Instruction.all

    render json: @instructions
  end

  # GET /instructions/1
  def show
    render json: @instruction
  end

  # POST /instructions
  def create
    @instruction = Instruction.new(instruction_params)

    if @instruction.save
      render json: @instruction, status: :created, location: @instruction
    else
      render json: @instruction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /instructions/1
  def update
    if @instruction.update(instruction_params)
      render json: @instruction
    else
      render json: @instruction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /instructions/1
  def destroy
    @instruction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_instruction
      @instruction = Instruction.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def instruction_params
      params.require(:instruction).permit(:instructions)
    end
end
