class Api::LocationsController < ApplicationController
    # query string: localhost:3001/api/locations?nerd_type=starwars
  before_action :set_location, except: [:index, :create]
  def index
    if nerd_type = params[:nerd_type]      
      render json: Location.all.where(nerd_type: params[:nerd_type])
    else 
      render json: Location.all
    end
  end

  def create
  end 

  def update
    if @location.update(location_params)
      render json: @location
    else 
      render json: { errors: @location.errors.full_messages.join(','), status: :bad_request}
    end 
  end

  def destroy
    @location.destroy
  end

  private 
  def location_params 
    params.require(:location).permit(:name, :active)
  end 
  def set_location
    @location = Location.find(params[:id]) 
  end
end
