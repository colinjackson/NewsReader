class StaticPagesController < ApplicationController
  before_filter :ensure_signed_in

  def index
  end
end
