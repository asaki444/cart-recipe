Rails.application.routes.draw do
 namespace :api do 
  namespace :v1 do 
    resources :users
    resources :instructions
    resources :recipes
    resources :ingredients
    resources :users
    resources :sessions, only: [:create]
    resources :registration, only: [:create]
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"

  end
 end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
