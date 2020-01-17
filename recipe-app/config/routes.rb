Rails.application.routes.draw do
 namespace :api do 
  namespace :v1 do 
    resources :users
    resources :instructions
    resources :recipes
    resources :ingredients
    resources :users
    resources :sessions, only: [:create]

  end
 end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
